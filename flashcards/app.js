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

// middleware import router file from index.js
const mainRoutes = require('./routes'); // because folder has index.js file we dont need to refer ./routes/index.js
const cardRoutes = require('./routes/cards');

app.use(mainRoutes); // declare middleware
app.use('/cards', cardRoutes);

// middleware runs when request comes into app
// app.use((req, res, next) => {
//   console.log('Hello');
//   const err = new Error('Oh noes!'); // introducing an error
//   err.status = 500;
//   next(err); // a way to end the middleware function, by calling next or sending a response
// });

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