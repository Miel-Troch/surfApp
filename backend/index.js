import dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` })

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// Dynamic import of sequelize and routes
async function loadDependencies() {
	const indexRoutes = await import('./routes/index.js')

	const app = express()
	const port = process.env.PORT || 3000

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

	// Use all other routes, these are protected by auth middleware
	app.use('/api', indexRoutes.default)

	const startServer = async () => {
		try {
			app.listen(port, () => {
				console.log(`Server is running on port ${port}`)
			})
		} catch (error) {
			console.error('Unable to connect to the database:', error)
			process.exit(1)
		}
	}

	startServer()
}

loadDependencies()
