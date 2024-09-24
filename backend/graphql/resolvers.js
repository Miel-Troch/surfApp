import lodash from 'lodash'
const { merge } = lodash
import { ContinentResolver } from './resolvers/Continent.js'
import { CountryResolver } from './resolvers/Country.js'

const RootResolver = merge(ContinentResolver, CountryResolver)

export default RootResolver
