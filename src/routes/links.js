const { Router } = require('express');

const { Link } = require('../models');

class LinkController {
	constructor() {
		this.router = Router();
		this.router.get('/', this.getLinks.bind(this));
		this.router.post('/', this.createLink.bind(this));
	}

	async getLinks(req, res) {
		const result = await Link.findAll();
		res.send(result);
	}

	async createLink(req, res) {
		try {
			await Link.create({ 'Name': req.body.name, 'Description': req.body.description, 'url': req.body.url });
			res.send('Created');
		} catch (e) {
			res.status(500);
			res.send('Failed to create link');
		}
	}
}

module.exports = new LinkController().router;