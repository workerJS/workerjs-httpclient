const httpclient = require("./");

const app = httpclient();

const events = app.get("events");

events.on("task", (task) => {
	console.log(task);

	task.events.on("message", (message) => {
		console.log(message);
	});
});

