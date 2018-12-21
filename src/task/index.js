module.exports = (app) => {
	const router = require("express").Router();

	router.post("/", function (req, res) {
		console.log(req.body);
		res.json({
			taskID: new Date()
		});
	});

	return router;
};

