// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************

// DEPENDANCIES
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var passport   = require("passport");
var session    = require("express-session");
var env = require('dotenv').load();
var exphbs = require('express-handlebars')

//Routes
var routes = require("./routes/api-routes");


// Models
var db = require("./models");


// ========Initializing EXPRESS========
var app = express();
var PORT = process.env.PORT || 8080;

// Static directory
app.use(express.static("public"));


// ========For BODY-PARSER========
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// ========For PASSPORT========
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

var authRoute = require('./routes/auth.js')(app);


// ========For HANDLEBARS========
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


// ROUTES
// =============================================================
require("./routes/api-routes.js")(app);


// ========Syncing DATABASE========
db.sequelize.sync().then(function() {

	//Checking if db is connected
	console.log("DB looks fine!");

}).catch(function(err) {

 	//Checking if db is connected
    console.log(err, "Something went wrong with the Database Update!")
 
 });

//// ========the LISTENER========
 app.listen(PORT, function() {

  		//Checking if port listens
    	console.log("App listening on PORT " + PORT);

});

