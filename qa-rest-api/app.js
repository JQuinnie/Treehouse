'use strict';
// specify dependencies
const express = require('express');
const app = express();
const routes = require('./routes.js');

const jsonParser = require('body-parser').json; // function that will return middleware
const logger = require('morgan'); // middleware logger

app.use(logger('dev'));
app.use(jsonParser());

app.use('/questions', routes); // setting up route

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Custom Error Handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500); // 500 is internal server error
  res.json({
    error: {
      message: err.message
    }
  });
});

// // adding middleware to extend functionality of express app
// app.use(function(req, res, next) {
//   req.body;
//   next();
// });

// specify server port
const port = process.env.PORT || 3000;
// set up app to listen on port
app.listen(port, function() {
  console.log('Express server is listening on port', port);
});