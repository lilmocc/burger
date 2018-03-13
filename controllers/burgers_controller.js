var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

});

router.post("/api/burgers", function(req, res) {

});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;


});

module.exports = router;
