const router = require("express").Router();

// {"name":"sendSMS","task":{"to":"+423423423478","body":"Fdfsfd fwdsfwergf dfgdfg rgergerg."}}

/**
 * @typedef Task
 * @property {string} name.required - Task name (name worker is using to listen on)
 * @property {object} task.required - Task payload
 */

/**
 * This is used for creating new task on workerJS and establishing connection to listener. 
 * @route POST /task
 * @consumes application/json
 * @produces application/json
 * @group task - Task creation
 * @param {Task.model} Task.body.required - Params for Task
 * @returns {object} 200 - Execution status
 * @returns {Error}  default - Unexpected error
 */

const crypto = require('crypto');

router.post("/", function (req, res) {
	req.body.time = (new Date()) * 1;

	const taskID = (crypto.createHash('sha256').update(JSON.stringify(req.body), 'utf8').digest("hex"));

	console.log(taskID);

	res.json({
		taskID: taskID
	});
});

module.exports = router;

