'use strict';
// specify dependencies
const express = require('express');
const app = express();

// specify server port
const port = process.env.PORT || 3000;
// set up app to listen on port
app.listen(port, function() {
  console.log('Express server is listening on port', port);
});