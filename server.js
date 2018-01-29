// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************

// DEPENDANCIES
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");


var routes = require("./routes/api-routes");

// Initializing EXPRESS
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);



// =============================================================
db.sequelize.sync().then(function() {
	//Checking if db is connected
	console.log("DB looks fine!");

	//Turning on the Listener
  	app.listen(PORT, function() {
  		//Checking if port listens
    	console.log("App listening on PORT " + PORT);
  });
});

