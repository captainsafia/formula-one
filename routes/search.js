var express = require('express');
var router = express.Router();
var Resume = require("../models/resume");
var User = require("../models/user");

var searchByMajor = function(major, callback) {
  var searchQuery = {
    "education.major" : major
  };
  Resume.find(searchQuery)
        .populate('user')
        .exec(function(error, resume) {
          if (error) {
            console.log(error);
          }
          callback(resume);
        });
}

var searchByName = function(person, callback) {
  User.find({name: {$regex: person}})
        .populate("resume")
        .exec(function(error, resumes) {
            if (error) {
              console.log(error);
            }
            callback(resumes);
        });
}

router.get('/', function(req, res) {
  res.render('search');
});

router.post('/', function(req, res) {
  var searchData = {
    major: req.body.major,
    year: req.body.year,
    international : req.body.international == 'yes'
  };
  Resume.find(searchData)
        .populate('user')
        .exec(function(error, resume) {
          if (error)  {
            console.log(error);
          }
          res.render('results', {
            'results' : resume
          });
        })
});

module.exports = {
  "router" : router,
  "searchByMajor": searchByMajor,
  "searchByName": searchByName
};
