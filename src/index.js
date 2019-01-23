module.exports = (bridge) => {
	const app = require("./app");

	app.set("bridge", bridge);

	const expressSwagger = require('express-swagger-generator')(app);

	app.set("PORT", process.env.PORT || 3000);

	app.use("/", require("./routes"));

	let options = {
		swaggerDefinition: {
			info: {
				description: 'Middleware for communication with WorkerJS',
				title: 'HTTPClient',
				version: '0.0.0',
			},
			host: 'localhost:3000',
			basePath: '/',
			produces: [
				"application/json"
			],
			schemes: ['http']
		},
		basedir: __dirname, //app absolute path
		files: ['./routes/**/*.js'] //Path to the API handle folder
	};

	expressSwagger(options)

	app.listen(app.get("PORT"), () => {
		console.log("HTTPClient listening on port "+app.get("PORT")+"!")
	});

	return app;
}

