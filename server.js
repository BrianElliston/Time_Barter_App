// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************

// DEPENDANCIES
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var passport   = require("passport");
var session    = require("express-session")


var routes = require("./routes/api-routes");
// Requiring our models for syncing
var db = require("./models");


// ========Initializing EXPRESS========
var app = express();
var PORT = process.env.PORT || 8080;


// ========For BODY-PARSER========
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// ========For PASSPORT========
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions









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

