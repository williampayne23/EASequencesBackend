
const SequenceLink = sequelize.define('SequenceLink', {
	sequenceId: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: 'Sequence',
			key: 'id'
		}
	},
	linkId: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: 'Link',
			key: 'id'
		}
	}
}, {
	timestamps: false
});
