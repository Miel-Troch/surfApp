export default function (sequelize, DataTypes) {
	return sequelize.define(
		'country',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			continent_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: 'country',
			schema: 'public',
			timestamps: false,
			indexes: [
				{
					name: 'country_pkey',
					unique: true,
					fields: [{ name: 'id' }]
				}
			]
		}
	)
}
