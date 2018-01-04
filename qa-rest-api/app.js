'use strict';
// specify dependencies
const express = require('express');
const app = express();
const jsonParser = require('body-parser').json; // function that will return middleware

app.use(jsonParser());

// adding middleware to extend functionality of express app
app.use(function(req, res, next) {
  req.body;
  next();
});

// specify server port
const port = process.env.PORT || 3000;
// set up app to listen on port
app.listen(port, function() {
  console.log('Express server is listening on port', port);
});