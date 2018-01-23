var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, test) {
  var Test = test;
  var LocalStrategy = require('passport-local').Strategy;

  passport.use('local-signup', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function (req, email, password, done) {
      var generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
      Test.findOne({
        where: {
          email: email
        }
      }).then(function (test) {
        if (test) {
          return done(null, false, {
            message: 'That email is already taken'
          });
        } else {
          var testPassword = generateHash(password);
          var data = {
            email: email,
            password: testPassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname
          };
          Test.create(data).then(function (newTest, created) {
            if (!newTest) {
              return done(null, false);
            }
            if (newTest) {
              return done(null, newTest);
            }
          });
        }
      });
    }
  ));

  //serialize
  passport.serializeUser(function (test, done) {
    done(null, test.id)
  });

  // deserialize user
  passport.deserializeUser(function (id, done) {
    Test.findById(id).then(function (test) {
      if (test) {
        done(null, test.get());
      } else {
        done(test.errors, null);
      }
    });
  });

  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy({
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function (req, email, password, done) {
      var Test = test;
      var isValidPassword = function (userpass, password) {
        return bCrypt.compareSync(password, userpass);
      }
      Test.findOne({
        where: {
          email: email
        }
      }).then(function (test) {
        if (!test) {
          return done(null, false, {
            message: 'Email does not exist'
          });
        }
        if (!isValidPassword(test.password, password)) {
          return done(null, false, {
            message: 'Incorrect password.'
          });
        }

        var userinfo = test.get();
        return done(null, userinfo);

      }).catch(function (err) {
        console.log("Error:", err);
        return done(null, false, {
          message: 'Something went wrong with your Signin'
        });
      });
    }
  ));

}
