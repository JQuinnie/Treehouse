const express = require('express');
const router = express.Router(); // router is mini app in express

// get the route, using render and pug
router.get('/', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('index', {name}); //es 6 shortcut simplified key {name: name}
  } else {
    res.redirect('/hello'); // if name does not exist
  }
});

router.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect('/'); // if name is present, redirect to indext route
  } else {
    res.render('hello'); // otherwise render and go to hello form
  }
})

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});
// Goodbye page to clear cookie and redirect
router.post('/goodbye', (req, res) => {
  res.clearCookie('username'); // clears cookie of username
  res.redirect('/hello'); // redirect to the hello route
});

module.exports = router;