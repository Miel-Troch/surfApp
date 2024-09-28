import lodash from 'lodash'
const { merge } = lodash
import { ContinentResolver } from './resolvers/Continent.js'
import { CountryResolver } from './resolvers/Country.js'
import { SpotResolver } from './resolvers/Spot.js'

const RootResolver = merge(ContinentResolver, CountryResolver, SpotResolver)

export default RootResolver
