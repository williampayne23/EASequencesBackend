const { Router } = require('express');
const SequenceManager = require('../services/sequenceManager');

class SequenceController {
	constructor() {
		this.router = Router();
		this.router.get('/', this.getSequences.bind(this));
		this.router.post('/', this.createSequence.bind(this));
	}

	async getSequences(req, res) {
		const result = await SequenceManager.getSequences();
		res.send(result);
	}

	async createSequence(req, res) {
		try {
			await SequenceManager.createSequence(req.body);
			res.send('Created');
		} catch (e) {
			res.status(500);
			res.send('Failed to create sequence');
		}
	}

	async reorderSequence(req, res) {

	}
}

module.exports = new SequenceController().router;