//The route for sign-up
//Imports the auth controller
var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app) {
 
 	//the sign-up route, 'gets' the sign-up page for the user
	app.get('/signup', authController.signup);
	
	//Route for signing up new user
    app.post('/signup', authController.signUp);
 
 	//the sign-in route, 'gets' the sign-up page for the user
 	app.get('/signin', authController.signin);

}


//Note
//This is imported to server.js file which passes app, as an argument