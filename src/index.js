const app = require('express')();
const port = 3001;

const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/task', function (req, res) {
	console.log(req.body);
	res.json({
		taskID: new Date()
	});
});

app.listen(3001, () => console.log(`Example app listening on port ${port}!`));

