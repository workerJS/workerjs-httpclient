const router = require("express").Router();

/**
 * @typedef Message
 * @property {string} taskID.required
 * @property {object} message.required - Payload to send to worker
 */

/**
 * This route is used for sending message to task runner. 
 * @route POST /message
 * @consumes application/json
 * @produces application/json
 * @group message - Message webhook
 * @param {Message.model} Message.body.required - Message to send to worker
 * @returns {object} 200 - Execution status
 * @returns {Error}  default - Unexpected error
 */

router.post("/", function (req, res) {
	console.log(req.body);
	res.json({
		taskID: new Date()
	});
});

module.exports = router;

