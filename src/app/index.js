const app = require("express")();
const bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '200mb'})); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

module.exports = app;

