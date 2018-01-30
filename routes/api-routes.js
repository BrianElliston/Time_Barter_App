var db = require("../models");
console.log(db.User);


module.exports = function (app) {

   

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