export default function (sequelize, DataTypes) {
	return sequelize.define(
		'continent',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			name: {
				type: DataTypes.INTEGER,
				allowNull: true
			}
		},
		{
			sequelize,
			tableName: 'continent',
			schema: 'public',
			timestamps: false,
			indexes: [
				{
					name: 'continent_pkey',
					unique: true,
					fields: [{ name: 'id' }]
				}
			]
		}
	)
}
