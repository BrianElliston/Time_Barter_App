//The route for sign-up
//Imports the auth controller
var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app) {
 
 	//the sign-up route, 'gets' the sign-up page for the user
    app.get('/signup', authController.signup);
 
}


//Notes:
//This is imported to server.js file which passes app, as an argument