var mongoose = require("mongoose");

var schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  filepicker: {
    type: String,
    trim: true
  }
});
