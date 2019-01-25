const eventManager = require("../eventManager");
const EventEmitter = require('events');

const crypto = require('crypto');

const taskManager = {
	_tasks: {},

	newTask: (task) => {
		const taskID = (crypto.createHash('sha256').update(JSON.stringify(task), 'utf8').digest("hex"));

		task.taskID = taskID;
		task.events = new EventEmitter();

		taskManager._tasks[taskID] = task;

		eventManager.emit("task", task);

		return task;
	},

	getTaskByID: (id) => {
		return taskManager._tasks[id];
	}
}

module.exports = taskManager;

