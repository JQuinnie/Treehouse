// require the Express module and assign to variable express
const express = require('express');
// call express, express function returns an Express application, assigned to variable app
const app = express();
// tells express which template engine to use, default it will look into the views folder
app.set('view engine', 'pug');
// get the route, using render and pug
app.get('/', (req, res) => {
  res.render('index');
});
// make second page route
app.get('/cards', (req, res) => {
  res.render('card', {prompt: "Who is buried in Grant's tomb?", hint: "Think about whoes tomb it is"});
});
// set up development server using the listen method with port number 3000
app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
// ABOVE code will create a server and when it is run, the server will run on machine