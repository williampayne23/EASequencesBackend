const { Router } = require('express');
const { Sequence, SequenceLink, Link } = require('../models');

class SequenceController {
	constructor() {
		this.router = Router();
		this.router.get('/', this.getSequences.bind(this));
		this.router.post('/', this.createSequence.bind(this));
	}

	async getSequences(req, res) {
		const result = await Sequence.findAll({
			include: [{
				model: Link,
				as: 'Links',
				required: false,
				through: { attributes: [] },
			}],
			order: [[Link, SequenceLink, 'order', 'ASC']]
		});
		res.send(result);
	}

	async createSequence(req, res) {
		try {
			await Sequence.create({ 'Name': req.query.name, 'Description': req.query.description });
			res.send('Created');
		} catch (e) {
			res.status(500);
			res.send('Failed to create sequence');
		}
	}
}

module.exports = new SequenceController().router;