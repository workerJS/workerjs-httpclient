const httpclient = require("./");

const app = httpclient();

const events = app.get("events");

events.on("task", (task) => {
	console.log(JSON.stringify(task, null, 4));

	task.events.on("message", (message) => {
		console.log(message);
	});
});

