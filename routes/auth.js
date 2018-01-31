//The route for sign-up
// import the auth controller and define the signup route.
var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    //route for posting to signup
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/signup'

    	}
    ));

    app.get('/dashboard',isLoggedIn, authController.dashboard);
 
 	app.get('/logout',authController.logout);

 	//route for posting to /signin.
	app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/signin'
    }
 
	));

 	//custom middleware to protect that route.
 	function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/signin');
 
	}
 
}

//Note
//This is imported to server.js file which passes app, as an argument