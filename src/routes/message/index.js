const router = require("express").Router();

router.post("/", function (req, res) {
	console.log(req.body);
	res.json({
		taskID: new Date()
	});
});

module.exports = router;

