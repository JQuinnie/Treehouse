// Problem: Need a simple way to look at a users badge count and JS points from a web browser
// Solution: Use Node.js to perform the profile look ups and server our template via HTTP

// Create web server
const http = require('http');
const PORT = 3000;
http.createServer(function (request, response) {
  homeRoute(request, response);
}).listen(PORT);
console.log('Server running at http://<workspace-url>/'); // for localhost, go to browser at 'localhost:3000'

// Handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
  // if url == "/" && GET
  if (request.url === "/") {
    // show search
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Header\n');
    response.write('Search\n');
    response.end('Footer\n');
  }
}
  // if url == "/" && POST
    // redirect to /:username

// Handle HTTP route GET / :username i.e. /chalkers
  // if url == "/...."
    // get json from Treehouse
      // on "end"
        // show profile
      // on "error"
        // show error

// Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values into string