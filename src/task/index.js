const eventManager = require("../eventManager");
const EventEmitter = require('events');

const crypto = require("crypto");

const request = require("request");

const taskManager = {
	_tasks: {},

	newTask: (task) => {
		const taskID = (crypto.createHash('sha256').update(JSON.stringify(task), 'utf8').digest("hex"));

		task.taskID = taskID;
		task.events = new EventEmitter();

		task.on = (name, callback) => {
			task.events.on(name, callback);
		};

		task.emit = (name, data) => {
			return new Promise((resolve, reject) => {
				request.post(task.webhook, {
					json: true,
					body: {
						taskID: task.taskID,
						message: data
					}
				}, (err, response, body) => {
					if(err) {
						reject(err);
					}

					resolve(body);
				});
			});
		};

		taskManager._tasks[taskID] = task;

		eventManager.emit("task", task);

		return task;
	},

	getTaskByID: (id) => {
		return taskManager._tasks[id];
	}
}

module.exports = taskManager;

