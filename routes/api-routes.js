var db = require("../models");



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


    app.post("/offer", function (req, res) {
        console.log(req.body);
        res.json({
            message: "request received"
        });

    });






}