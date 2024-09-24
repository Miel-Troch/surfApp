import { country } from '../../db/Database.js'

export const readCountrys = async (_, { continent_id }, {}) => {
	return await country.findAll({ where: { continent_id } })
}

const CountryResolver = {
	Query: { readCountrys }
}

export { CountryResolver }
