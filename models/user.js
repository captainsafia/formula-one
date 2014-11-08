var mongoose = require("mongoose");

var schema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true
  },
  year: {
    type: String,
    trim: true,
    enum: 'Freshman Sophomore Junior Senior Graduate'.split(' ')
  },
  university: {
    type: String,
    trim: true
  },
  major: {
    type: String, 
    trim: true
  }, 
  international : { 
    type: Boolean
  },
  epic: {
    type: Boolean
  }
});

var User = mongoose.model('User', schema);

module.exports = User;
