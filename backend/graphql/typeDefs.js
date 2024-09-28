import { Continent } from './types/Continent.js'
import { Country } from './types/Country.js'
import { Spot } from './types/Spot.js'
import { makeExecutableSchema } from '@graphql-tools/schema'

const query = `
type Query {
  readContinents: [Continent]
  readCountrysWithSpots(continent_id: Int!): [Country]
}
`

const mutation = `
type Mutation {
}
`

const typeDefs = makeExecutableSchema({
	typeDefs: [Continent, Country, Spot, query]
})

export default typeDefs
