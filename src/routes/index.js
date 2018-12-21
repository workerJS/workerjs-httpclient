module.exports = () => {
	const router = require("express").Router();

	router.use("/task", require("./task"));
	router.use("/message", require("./message"));

	return router;
};

