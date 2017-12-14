// Problem: Need a simple way to look at a users badge count and JS points from a web browser
// Solution: Use Node.js to perform the profile look ups and server our template via HTTP

// Create web server
const http = require('http');
const PORT = 3000;
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  setInterval(function(){
    response.write(new Date() + '\n');
  }, 1000);
  response.end('Hello World\n');
}).listen(PORT);
console.log('Server running at http://<workspace-url>/'); // for localhost, go to browser at 'localhost:3000'

// Handle HTTP route GET / and POST / i.e. Home
  // if url == "/" && GET
    // show search
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