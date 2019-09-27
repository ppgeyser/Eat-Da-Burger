var express = require("express");

var router = express.Router();

// Import the model to use its database functions
var burger = require("../models/burger");

// Create all our route logic
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", [req.body.name], function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var eatenId = req.params.id;

    console.log("Burger eaten: ", eatenId);

    burger.updateOne(eatenId, function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();

    });
});

// Export routes for server.js to use.
module.exports = router;