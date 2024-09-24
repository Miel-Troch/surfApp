import { Continent } from './types/Continent.js'
import { Country } from './types/Country.js'
import { makeExecutableSchema } from '@graphql-tools/schema'

const query = `
type Query {
  readContinents: [Continent]
  readCountrys(continent_id: Int!): [Country]
}
`

const mutation = `
type Mutation {
}
`

const typeDefs = makeExecutableSchema({
	typeDefs: [Continent, Country, query]
})

export default typeDefs
