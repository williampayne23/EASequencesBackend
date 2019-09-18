module.exports = function (sequelize, DataTypes) {
	return Food = sequelize.define('Sequence', {
		Name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		timestamps: false
	});
};