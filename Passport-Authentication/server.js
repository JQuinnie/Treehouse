// Calling dependencies below
var express = require('express');
var app = express();
var passport = require('passport');

// OAuth and passport-github
var GithubStrategy = require('passport-github').Strategy;

passport.use(new GithubStrategy({
    clientID: "e8acc8df2bf7081231ec",
    clientSecret: "4276aa23377929ccfec9e3311a36dbb4b5eed503",
    callbackURL: "http://localhost:4000/auth/github/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

// Express and Passport Session
var session = require('express-session');
app.use(session({
  secret: "this is not a secret"
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  // placeholder for custom user serialization
  // null is for errors
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  done(null, user);
});

// Call this to start the GitHub Login process
app.get('/auth/github', passport.authenticate('github'));

// GitHub will call this URL
app.get('/auth/github/callback', passport.authenticate('github', {
    failureRedirect: '/'
  }),
  function (req, res) {
    res.redirect('/');
  }
);

// main menu route
app.get('/', function (req, res) {
  var html = "<ul>\
    <li><a href='/auth/github'>GitHub</a></li>\
    <li><a href='/logout'>logout</a></li>\
  </ul>";

  // dump the user for debugging
  if (req.isAuthenticated()) {
    html += "<p>authenticated as user:</p>"
    html += "<pre>" + JSON.stringify(req.user, null, 4) + "</pre>";
  }

  res.send(html);
});


// GET /logout
app.get('/logout', function (req, res) {
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

// Simple middleware to ensure user is authenticated.
// Use this middleware on any resource that needs to be protected.
// If the request is authenticated (typically via a persistent login session),
// the request will proceed.  Otherwise, the user will be redirected to the
// login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // req.user is available for use here
    return next();
  }

  // denied. redirect to login
  res.redirect('/')
}

app.get('/protected', ensureAuthenticated, function (req, res) {
  res.send("access granted. secure stuff happens here");
});


var server = app.listen(4000, function () {
  console.log('Example app listening at http://%s:%s',
    server.address().address, server.address().port);
});

// tutorial source @ https://www.jokecamp.com/tutorial-passportjs-authentication-in-nodejs/
// saved OAuth permissions on Github @ https://github.com/settings/applications