// require the Express module and assign to variable express
const express = require('express');
// require middleware body-parser and cookie-parser
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// call express, express function returns an Express application, assigned to variable app
const app = express();
// tells express to use both parsers
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// tells express which template engine to use, default it will look into the views folder
app.set('view engine', 'pug');
// get the route, using render and pug
app.get('/', (req, res) => {
  const name = req.cookies.username;
  res.render('index', {name}); //es 6 shortcut simplified key {name: name}
});
// make second page route
app.get('/cards', (req, res) => {
  res.render('card', {prompt: "Who is buried in Grant's tomb?", hint: "Think about whoes tomb it is"});
});

app.get('/hello', (req, res) => {
  res.render('hello');
})

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
})
// set up development server using the listen method with port number 3000
app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
// ABOVE code will create a server and when it is run, the server will run on machine