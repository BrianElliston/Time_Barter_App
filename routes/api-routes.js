var db = require("../models");



module.exports = function (app) {

   


    app.post("/offer", function (req, res) {
        console.log(req.body);
        res.json({
            message: "request received"
        });

    });






}