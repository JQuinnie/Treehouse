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

// middleware runs when request comes into app
// app.use((req, res, next) => {
//   console.log('Hello');
//   const err = new Error('Oh noes!'); // introducing an error
//   err.status = 500;
//   next(err); // a way to end the middleware function, by calling next or sending a response
// });

// get the route, using render and pug
app.get('/', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('index', {name}); //es 6 shortcut simplified key {name: name}
  } else {
    res.redirect('/hello'); // if name does not exist
  }
});
// make second page route
app.get('/cards', (req, res) => {
  res.render('card', {prompt: "Who is buried in Grant's tomb?", hint: "Think about whoes tomb it is"});
});

app.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect('/'); // if name is present, redirect to indext route
  } else {
    res.render('hello'); // otherwise render and go to hello form
  }
})

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});
// Goodbye page to clear cookie and redirect
app.post('/goodbye', (req, res) => {
  res.clearCookie('username'); // clears cookie of username
  res.redirect('/hello'); // redirect to the hello route
});

// middleware file not found error
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// middleware error handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

// set up development server using the listen method with port number 3000
app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
// ABOVE code will create a server and when it is run, the server will run on machine