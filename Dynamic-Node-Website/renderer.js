var fs = require('fs');

function view(templateName, values, response) {
  // read from template files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html');
  // insert valves into the content

  // write out the contents to the responses
  response.write(fileContents);
}

module.exports.view = view;