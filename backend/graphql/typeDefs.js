import { Continent } from './types/Continent.js'
import { makeExecutableSchema } from '@graphql-tools/schema'

const query = `
type Query {
  readContinents: [Continent]
}
`

const mutation = `
type Mutation {
}
`

const typeDefs = makeExecutableSchema({
	typeDefs: [Continent, query]
})

export default typeDefs
