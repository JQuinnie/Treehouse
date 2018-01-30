'use strict';
// setting up dependencies
const express = require('express');
const router = express.Router();
// import question model
const Question = require('./models').Question;

// GET /questions
// route for questions collection
router.get('/', function (req, res, next) {
  Question.find({})
    .sort({
      createdAt: -1
    })
    .exec(function (err, questions) {
      if (err) return next(err);
      res.json(questions);
    });
});

// POST /questions
// route for creating questions
router.post('/', function (req, res) {
  res.json({
    response: 'You sent me a POST request',
    body: req.body
  });
});

// GET /questions/:qID
// route for getting questions
router.get('/:qID', function (req, res) {
  res.json({
    response: 'You sent me a GET request for ID ' + req.params.id
  });
});

// POST /questions/:qID/answers
// reoute for creating an answer
router.post('/:qID/answers', function (req, res) {
  res.json({
    response: 'You sent me a POST request to /answers',
    questionId: req.params.qID,
    body: req.body
  });
});

// PUT /questions/:qID/answers/:aID
// edit a specific answer
router.put('/:qID/answers/:aID', function (req, res) {
  res.json({
    response: 'You sent me a PUT request to /answers',
    questionId: req.params.qID,
    answerId: req.params.aID,
    body: req.body
  });
});

// DELETE /questions/:qID/answers/:aID
// delete a specific answer
router.delete('/:qID/answers/:aID', function (req, res) {
  res.json({
    response: 'You sent me a DELETE request to /answers',
    questionId: req.params.qID,
    answerId: req.params.aID,
  });
});

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down
// Vote on a specific answer
router.post('/:qID/answers/:aID/vote-:dir', function (req, res, next) {
  if (req.params.dir.search(/^(up|down)$/) === -1) { // search on up or down
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  } else {
    next(); // next function to execute
  }
}, function (req, res) { //dir = direction
  res.json({
    response: 'You sent me a POST request to /vote-' + req.params.dir,
    questionId: req.params.qID,
    answerId: req.params.aID,
    vote: req.params.dir
  });
});

module.exports = router;
