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
    year: {
      type: String
      enum: ["Freshman", 
              "Sophomore", 
              "Junior", 
              "Senior", 
              "Graduate Student"]
    }
    startDate: Date,
    endDate: Date,
    GPA: Number
  }],
  volunteer: [{
    organization: String,
    position: String,
    startDate: Date,
    endDate: Date,
    summary: String
  }]
  skills: [{
    skill: String,
    level: Number
  }],
  awards: [{
    title: String, 
    date: Date, 
    awarder: String, 
    summary: String
  }],
  languages: [{
    language: String,
    fluency: {
      type: String,
      enum: ["No Practical Proficiency", 
              "Elementary Proficiency", 
              "Limited Working Proficiency", 
              "Minimum Working Proficiency",
              "Full Professional Proficiency",
              "Native or Bilingual Speaker"]
    }
  }]
  filepicker: {
    type: String,
    trim: true
  }
});

var Resume =  mongoose.model('Resume', schema);

module.exports = Resume;
