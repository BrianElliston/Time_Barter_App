var db = require("../models");
console.log(db.User);


module.exports = function (app) {

    // app.gets
    // app.posts
    // etcetera
    // GET route for getting all of the 
    app.get("/", function (req, res) {
        res.json({
            message: "Hello World"
        });

    });

    app.get("/api/users", function(req, res) {
        
        db.User.findAll({}).then(function(dbPost) {
          res.json(dbPost);
        });
      });


    app.post("/offer", function (req, res) {
        console.log(req.body);
        res.json({
            message: "request received"
        });

    });






}