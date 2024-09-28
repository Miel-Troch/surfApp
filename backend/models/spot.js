export default function (sequelize, DataTypes) {
	return sequelize.define(
		'spot',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			country_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			type: {
				type: DataTypes.STRING,
				allowNull: false
			},
			direction: {
				type: DataTypes.STRING,
				allowNull: false
			},
			bottom: {
				type: DataTypes.STRING,
				allowNull: false
			},
			difficulty: {
				type: DataTypes.STRING,
				allowNull: false
			},
			quality_rating: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			lat: {
				type: DataTypes.STRING,
				allowNull: false
			},
			long: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: 'spot',
			schema: 'public',
			timestamps: false,
			indexes: [
				{
					name: 'spot_pkey',
					unique: true,
					fields: [{ name: 'id' }]
				}
			]
		}
	)
}
