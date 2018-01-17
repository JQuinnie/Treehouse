var mongoose = require('mongoose');

// create mongoose schema object
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true, // unique email address
    required: true, // enforces presence of email
    trim: true // removes white space
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  favoriteBook: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;