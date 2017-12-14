var fs = require('fs');

function mergeValues(values, content) {
  // cycle over the keys
  for (var key in values) {
    // replace all {{key}} with the value from the values object
    content = content.replace('{{' + key + '}}', values[key]); // same as --> values.avatarUrl === values['avatarUrl']
  }
    // return merged content
    return content;
}

function view(templateName, values, response) {
  // read from template files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: 'utf8'});
  // insert valves into the content
  fileContents = mergeValues(values, fileContents);
  // write out the contents to the responses
  response.write(fileContents);
}

module.exports.view = view;