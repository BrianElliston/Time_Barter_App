//controller for the signup route

var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
};

exports.signin = function(req, res) {
 
    res.render('signin');
 
};

exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}

//Notes:
//This is imported to auth.js, which defines its route
