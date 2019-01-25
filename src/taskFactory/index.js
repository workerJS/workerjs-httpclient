module.exports = function(task){
	const t = {
		_task: undefined,

		finish: function(){
			process.send({type: "finished", _uid: t._task._uid});
		},
		failed: function(){
			process.send({type: "failed", _uid: t._task._uid});
		},
		publish: function(data){
			process.send({type: "message", _uid: t._task._uid, message: JSON.stringify(data)});
		}
	};

	t._task = task;

	return t;
};
