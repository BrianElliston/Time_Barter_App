
var db = require("../models");

// var Offer = require("../models/offer.js");

module.exports = function (app) {

  app.get("/api/all/offers", function(req, res) {

    db.offer.findAll({}).then(function(results) {

      res.json(results);
    });
  });

  app.get("/api/all/users", function(req, res) {

    db.user.findAll({}).then(function(results) {

      res.json(results);
    });
  });

};



