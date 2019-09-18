const { Router } = require('express');

const { SequenceLink } = require('../models');

class SequenceLinkController {
	constructor() {
		this.router = Router();
		this.router.get('/', this.getSequenceLinks.bind(this));
		this.router.post('/', this.createSequenceLink.bind(this));
	}

	async getSequenceLinks(req, res) {
		const result = await SequenceLink.findAll();
		res.send(result);
	}

	async createSequenceLink(req, res) {
		try {
			await SequenceLink.create({ 'SequenceId': req.query.sequence, 'LinkId': req.query.link, 'order': req.query.order });
			res.send('Created');
		} catch (e) {
			res.status(500);
			res.send('Failed to create sequence');
		}
	}
}

module.exports = new SequenceLinkController().router;