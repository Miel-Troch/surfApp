import { Sequelize, DataTypes } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` })

// Sequelize instance
function getSequelizeInstance() {
	return new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: 'postgres',
		logging: false,
		timezone: 'Europe/Paris'
	})
}

const sequelize = getSequelizeInstance()

import continentFactory from '../models/continent.js'
import countryFactory from '../models/country.js'
const continent = continentFactory(sequelize, DataTypes)
const country = countryFactory(sequelize, DataTypes)

export { continent, country, sequelize }
