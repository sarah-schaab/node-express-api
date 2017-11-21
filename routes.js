'use-strict';
const express = require("express");
const router = express.Router();

// GET /questions
router.get("/", function(req, res){
  // return all the questions
  res.json({response: "You sent a get request"});
});

// Post /questions
router.post("/", function(req, res){
  // return all the questions
  res.json({
    response: "You sent a post request",
    body: req.body
  });
});

// GET /questions/:id
router.get("/:id", function(req, res){
  // return all the questions
  res.json({response: "You sent a get request for ID " + req.params.id});
});

module.exports = router;
