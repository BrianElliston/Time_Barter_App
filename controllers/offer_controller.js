//Bring in the Models
var db = require("../models");
//Controller to create a new offer
var exports = module.exports = {}

  exports.createOffer = function(req, res) {
    //Check for a response
    console.log("creating an offer for the table");
    //Save offer to database
    db.Offer.create(req.body).then(function(dbOffer) {
      res.render("offers");
    })
  };
  
  //Function to increment and decrement hours from user time-bank.
  //When request button is clicked the time bank of the user offering service will decrease
  //and the time bank of the user requesting the service will decrease.

  // will show user contact info











  // Increment :

  // mysql_query(“UPDATE users SET points = time_bank + 1 WHERE user_id = ‘”.$userid.”‘”);
  
  // Decrement:
  
  // mysql_query(“UPDATE users SET points = points – 1 WHERE user_id = ‘”.$userid.”‘”);

  // move offer to show on current offers


  