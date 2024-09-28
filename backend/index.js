import dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` })

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { ApolloServer, AuthenticationError } from 'apollo-server-express'
import { makeExecutableSchema } from '@graphql-tools/schema'
import http from 'http'
import https from 'https'

async function loadDependencies() {
	const { sequelize } = await import('./db/Database.js')
	const typeDefs = await import('./graphql/typeDefs.js')
	const resolvers = await import('./graphql/resolvers.js')
	await import('./db/Methods.js')

	const app = express()
	const port = process.env.PORT || 3000

	let server = null
	if (process.platform !== 'win32') {
		server = https.createServer(options, app)
	} else {
		server = http.createServer(app)
	}

	// Parse the CORS_ORIGINS environment variable
	const corsOrigins = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : []

	const corsOptions = {
		origin: (origin, callback) => {
			if (corsOrigins.includes(origin) || !origin) {
				// Allow requests with no origin (like mobile apps or curl requests)
				callback(null, true)
			} else {
				callback(new Error('Not allowed by CORS'))
			}
		},
		credentials: true,
		optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204,
	}

	app.use(cookieParser())
	app.use(cors(corsOptions))
	app.use(express.json())

	const schema = makeExecutableSchema({
		typeDefs: typeDefs.default,
		resolvers: resolvers.default
	})

	const apolloServer = new ApolloServer({
		schema,
		context: ({ req, res }) => {
			if (req.graphQLError === 'UNAUTHENTICATED') {
				throw new AuthenticationError('You must be logged in')
			}
			if (req.graphQLError === 'FORBIDDEN') {
				throw new AuthenticationError('Access is forbidden')
			}

			return { req, res }
		}
	})

	await apolloServer.start()

	apolloServer.applyMiddleware({ app, path: '/graphql' })

	const startServer = async () => {
		try {
			await sequelize.authenticate()
			console.log('✅ Sequelize: connection to the database has been established successfully.')

			server.listen(port, () => {
				console.log(`✅ Server: running on port ${port}`)
				console.log(`✅ GraphQL: is available at ${apolloServer.graphqlPath}`)
			})
		} catch (error) {
			console.error('Unable to connect to the database:', error)
			process.exit(1)
		}
	}

	await startServer()
}

loadDependencies()
