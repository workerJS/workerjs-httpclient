const app = require("express")();
const bodyParser = require('body-parser');

app.set("PORT", process.env.PORT || 3001);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/task', function (req, res) {
	console.log(req.body);
	res.json({
		taskID: new Date()
	});
});

app.listen(app.get("PORT"), () => {
	console.log(`Example app listening on port ${port}!`)
});

