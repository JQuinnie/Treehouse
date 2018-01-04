'use strict';
// setting up dependencies
const express = require('express');
const router = express.Router();

// GET /questions
// route for questions collection
router.get('/', function(req, res) {
  res.json({response: 'You sent me a GET request'});
});

// POST /questions
// reoute for creating questions
router.post('/', function(req, res) {
  res.json({
    response: 'You sent me a POST request',
    body: req.body
  });
});

// GET /questions/:qID
// reoute for creating questions
router.get('/:qID', function(req, res) {
  res.json({
    response: 'You sent me a GET request for ID ' + req.params.id
  });
});

// POST /questions/:qID/answers
// reoute for creating an answer
router.post('/:qID/answers', function(req, res) {
  res.json({
    response: 'You sent me a POST request to /answers',
    questionId: req.params.qID,
    body: req.body
  });
});

// PUT /questions/:qID/answers/:aID
// edit a specific answer
router.put('/:qID/answers/:aID', function(req, res) {
  res.json({
    response: 'You sent me a PUT request to /answers',
    questionId: req.params.qID,
    answerId: req.params.aID,
    body: req.body
  });
});

// DELETE /questions/:qID/answers/:aID
// delete a specific answer
router.delete('/:qID/answers/:aID', function(req, res) {
  res.json({
    response: 'You sent me a DELETE request to /answers',
    questionId: req.params.qID,
    answerId: req.params.aID,
  });
});

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down
// Vote on a specific answer
router.post('/:qID/answers/:aID/vote-:dir', function(req, res) { //dir = direction
  res.json({
    response: 'You sent me a POST request to /vote-' + req.params.dir,
    questionId: req.params.qID,
    answerId: req.params.aID,
    vote: req.params.dir
  });
});

module.exports = router;
