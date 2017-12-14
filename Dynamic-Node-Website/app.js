// Problem: Need a simple way to look at a users badge count and JS points from a web browser
// Solution: Use Node.js to perform the profile look ups and server our template via HTTP

var router = require('./router.js');

// Create web server
const http = require('http');
const PORT = 3000;
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(PORT);
console.log('Server running at http://<workspace-url>/'); // for localhost, go to browser at 'localhost:3000'

// Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values into string