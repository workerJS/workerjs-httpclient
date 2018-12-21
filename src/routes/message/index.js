const router = require("express").Router();

/**
 * This route is used for sending message to task runner. 
 * @route POST /message
 * @group message - Message webhook
 * @param {string} email.query.required - username or email - eg: user@domain
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

router.post("/", function (req, res) {
	console.log(req.body);
	res.json({
		taskID: new Date()
	});
});

module.exports = router;

