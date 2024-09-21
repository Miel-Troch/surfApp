import { continent } from '../../db/Database.js'

export const readContinents = async (_, {}, {}) => {
	return await continent.findAll()
}

const ContinentResolver = {
	Query: { readContinents }
}

export { ContinentResolver }
