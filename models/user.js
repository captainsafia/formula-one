var mongoose = require("mongoose");

var schema = mongoose.Schema({
  name: {
    type: String,
    trim: true
    match: "/^[a-z ,.'-]+$/i'"
  }
  email: {
    type: String,
    match: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$'
    trim: true
  }
  year: {
    type: String,
    trim: true,
    enum: 'Freshman Sophomore Junior Senior Graduate'.split(' ')
  }
  major: {
    type: String,
    trim: true
  }
  international : {
    type: Boolean
  }
  epic: {
    type: Boolean
  }
});

var User = mongoose.model('User', schema);

module.exports = User;
