import lodash from 'lodash'
const { merge } = lodash
import { ContinentResolver } from './resolvers/Continent.js'

const RootResolver = merge(
	ContinentResolver
)

export default RootResolver
