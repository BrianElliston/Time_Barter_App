//Controller for the sign up route
var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
};

//Notes:
//This is imported to auth.js, which defines its route
