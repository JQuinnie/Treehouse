// custom middleware

// log out function
function loggedOut(req, res, next) {
  if (req.session && req.session.userId) {
    return res.redirect('/profile');
  }
  return next(); // execution to next middleware
}

module.exports.loggedOut = loggedOut;