//Bring in the Models
var db = require("../models");
//Controller for the sign up route
var exports = module.exports = {}
 
exports.signup = function(req, res) {
    res.render('signup');
};

exports.signUp = function(req, res) {
        //Make sure we have the data
       console.log("This is req.body",req.body);
       //Save the user to the DB
       db.User.create(req.body).then(function(dbUser) {
        res.render("index2");
      });
       //Render the dashboard view
    //    res.render('dashboard');
   };

exports.signin = function(req, res) { 
    res.render('signin'); 
}

//Notes:
//This is imported to auth.js, which defines its route
