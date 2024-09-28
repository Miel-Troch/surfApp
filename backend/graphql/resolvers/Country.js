import { sequelize, country, spot } from '../../db/Database.js'

export const readCountrysWithSpots = async (_, { continent_id }, {}) => {
	return await country.findAll({
		where: { continent_id },
		include: [
			{
				model: spot,
				require: false
			}
		]
	})
}

const CountryResolver = {
	Query: { readCountrysWithSpots }
}

export { CountryResolver }
