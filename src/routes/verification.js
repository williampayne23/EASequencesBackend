const { Router } = require('express');

class VerificationController {
	constructor() {
		this.router = Router();
		this.router.get('/', this.heartbeat.bind(this));
	}

	async heartbeat(req, res) {
		res.send('Server is online');
	}
}

module.exports = new VerificationController().router;