var db = require("../models");

module.exports = function (app) {
    // Show all of the users in the database
    app.get("/api/users", function(req, res) {
        console.log(res.offer)
        
        db.offer.findAll({
          // where: {
          //   category: "Cooking"
          // }
        }).then(function(dbOffers) {
          res.render("offers", {offers: dbOffers});
        });
    });


    // Show all of the offers in the category a user selects
    app.get("/api/posts/category/:category", function(req, res) {
        db.offer.findAll({
          where: {
            category: req.params.category
          }
        })
        .then(function(dbOffer) {
          res.json(dbOffer);
        });
      });

    app.post("/offer", function (req, res) {
        console.log(req.body);
        res.json({
            message: "request received"
        });
    });
}