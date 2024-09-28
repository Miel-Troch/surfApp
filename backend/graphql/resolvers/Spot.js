import { spot } from '../../db/Database.js'

export const readSpot = async (_, { id }, {}) => {
	return await spot.findOne({ where: { id } })
}

const SpotResolver = {
	Query: { readSpot }
}

export { SpotResolver }
