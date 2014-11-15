var mongoose = require("mongoose");

var schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  work: [{
    company : String,
    position: String,
    startDate: Date,
    endDate: Date,
    summary: String
  }],
  education: [{
    institution: String,
    major: String,
    startDate: Date,
    endDate: Date,
    GPA: Number
  }],
  skills: [{
    skill: String,
    level: Number
  }],
  title: [{
    title: String, 
    date: String, 
    awarder: String, 
    summary: String
  }],
  filepicker: {
    type: String,
    trim: true
  }
});

var Resume =  mongoose.model('Resume', schema);

module.exports = Resume;
