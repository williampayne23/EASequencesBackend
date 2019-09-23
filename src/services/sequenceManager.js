const { sequelize, Sequence, Link, SequenceLink } = require('../models/index');

class SequenceManager {
	static createSequence(sequenceData) {
		return sequelize.transaction(t => {
			return Sequence.create({ Name: sequenceData.Name, Description: sequenceData.Description }, { transaction: t })
				.then(sequence => {
					return Promise.all(sequenceData.links.map(async link => {
						return Link.findOrCreate({ where: link }).then((links, i) => {
							return sequence.addLink(links[0], { through: { order: i } });
						});
					}))
						.then(() => sequence);
				});
		});
	}

	static updateSequence(sequenceData) {
		return sequelize.transaction(t => {
			return Sequence.find({ id: sequenceData.id }, { transaction: t })
				.then(sequence => {
					return Promise.all(sequenceData.links.map(async sl => {
						const link = await Link.find({ where: sl.link });
						return SequenceLink.find({ where: { LinkId: link.id, SequenceId: sequence.id } }).then((link, i) => {
							return link.update({ order: sl.order });
						});
					}))
						.then(() => sequence);
				});
		});
	}

	static getSequences() {
		return Sequence.findAll({
			include: [{
				model: Link,
				as: 'Links',
				required: false,
				through: { attributes: [] },
			}],
			order: [[Link, SequenceLink, 'order', 'ASC']]
		});
	}
}

/**
 * sequnce = {
 * name : "Hello",
 * description : "Hello",
 * links : [
 *  { url : "", description : "" }
 * ]
 * }
 */

module.exports = SequenceManager;