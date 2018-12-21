module.exports = (app) => {
	const router = require("express").Router();

	app.post("/", function (req, res) {
		console.log(req.body);
		res.json({
			taskID: new Date()
		});
	});

	return router;
};

