import { country, spot } from './Database.js'

country.hasMany(spot, { foreignKey: 'country_id' })

spot.belongsTo(country, { foreignKey: 'country_id' })
