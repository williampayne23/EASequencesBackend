const Sequelize = require('sequelize');

var config = require('../config');

const sequelize = new Sequelize('sequences', 'will', config.password, {
	dialect: 'mysql',
	logging: false
});

const Sequence = sequelize.define('Sequence', {
	Name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Description: {
		type: Sequelize.STRING,
		allowNull: true
	}
}, {
	timestamps: false
});

const Link = sequelize.define('Link', {
	Name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Description: {
		type: Sequelize.STRING,
		allowNull: true
	},
	url: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	}
}, {
	timestamps: false
});

const SequenceLink = sequelize.define('SequenceLink', {
	order: {
		type: Sequelize.INTEGER
	}
}, {
	timestamps: false
});

Sequence.belongsToMany(Link, { through: SequenceLink });
Link.belongsToMany(Sequence, { through: SequenceLink });

module.exports = {
	sequelize,
	Sequence,
	Link,
	SequenceLink
};