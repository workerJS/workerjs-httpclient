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

const taskManager = require("../../task");

router.post("/", function (req, res) {
	const taskID = req.body.taskID;

	const task = taskManager.getTaskByID(taskID);

	task.events.emit("message", req.body.message);

	res.json({
		taskID: new Date()
	});
});

module.exports = router;

