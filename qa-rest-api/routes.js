'use strict';
// setting up dependencies
const express = require('express');
const router = express.Router();
// import question model
const Question = require('./models').Question;

// trigger handler, preload the question document in the handler so it will be present on any matching route
router.param('qID', function (req, res, next, id) {
  Question.findById(req.params.qID, function (err, doc) {
    if (err) return next(err);
    if (!doc) {
      err = new Error('Not Found');
      err.status = 404;
      return next(err);
    }
    req.question = doc;
    return next();
  });
});

router.param('aID', function (req, res, next, id) {
  req.answer = req.question.answers.id(id);
  if (!req.answer) {
    err = new Error('Not Found');
    err.status = 404;
    return next(err);
  }
  next();
});

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
router.post('/', function (req, res, next) {
  var question = new Question(req.body);
  question.save(function (err, question) {
    if (err) return next(err);
    res.status(201);
    res.json(question);
  });
});

// GET /questions/:qID
// route for getting questions
router.get('/:qID', function (req, res) {
  res.json(req.question);
});

// POST /questions/:qID/answers
// reoute for creating an answer
router.post('/:qID/answers', function (req, res, next) {
  req.question.answers.push(req.body);
  req.question.save(function (err, question) {
    if (err) return next(err);
    res.status(201);
    res.json(question);
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
