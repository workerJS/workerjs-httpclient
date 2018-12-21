const app = require("./app");

app.set("PORT", process.env.PORT || 3001);

require("./routes");

app.listen(app.get("PORT"), () => {
	console.log("HTTPClient listening on port "+app.get("PORT")+"!")
});

