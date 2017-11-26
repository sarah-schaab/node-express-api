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
router.get("/:qid", function(req, res){
  // return all the questions
  res.json({response: "You sent a get request for ID " + req.params.qid});
});

// POST /questions/:id/answers
// route for creating an answer
router.post("/:qid/answers", function(req, res){
  res.json({
    response: "You sent a post request to /answers ",
    questionId: req.params.qid,
    body: req.body
  });
});

// PUT /questions/:id/answers/:id
// edit a specific answer
router.put("/:qid/answers/:aid", function(req, res){
  res.json({
    response: "You sent a put request to /answers ",
    questionId: req.params.qid,
    answerId: req.params.aid,
    body: req.body
  });
});

// DELETE /questions/:qid/answers/:aid
router.delete("/:qid/answers/:aid", function(req, res){
  res.json({
    respon se: "You sent a delete request to /answers ",
    questionId: req.params.qid,
    answerId: req.params.aid,
    body: req.body
  });
});
// POST /questions/:qid/answers/:aid/vote-up
// POSt /questions/:qid/answers/:aid/vote-down
// Vote on a specific answer
router.post("/:qid/answers/:aid/vote-:dir", function(req, res){
  res.json({
    respon se: "You sent a post request to /vote-" + req.params.dir,
    questionId: req.params.qid,
    answerId: req.params.aid,
    vote: req.params.dir
  });
});

module.exports = router;
