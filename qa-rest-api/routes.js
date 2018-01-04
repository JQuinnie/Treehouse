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

// GET /questions/:id
// reoute for creating questions
router.get('/:id', function(req, res) {
  res.json({
    response: 'You sent me a GET request for ID ' + req.params.id
  });
});

module.exports = router;
