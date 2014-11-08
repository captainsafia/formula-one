var express = require('express');
var router = express.Router();
var Resume = require("../models/resume");
var User = require("../models/user");
var MongoClient = require('mongodb').MongoClient;

var DB_URL = "mongodb://localhost/formula-one";

/* POST new user */
router.post('/new', function(req, res) {
  var data = {
    "name" : req.body.name,
    "email" : req.body.email,
    "year" : req.body.year,
    "university" : req.body.university,
    "major" : req.body.major,
    "international" : req.body.international === 'true',
    "epic" : req.body.epic === 'true',
    "filepicker_url" : req.body.filepicker_url
  };
  console.log(data);
  User.create(data, function(error, user) {
    if (error)  {
      console.log(error);
      // Send to 500 page
    } 
    Resume.create({"user" : user._id, "filepicker" : data.filepicker_url}, function(error, resume) {
      if (error)  {
        console.log(error);
      }
        // Redirect to success page 
      });
  });
});

router.get('/new', function(req, res) {
  res.render('new');
});

router.post('/existing', function(req, res) {
  var email = req.body.email;
  var name = req.body.name;
  var filepicker_url = req.body.filepicker_url;
  MongoClient.connect(DB_URL, function(error, database) {
    var existingUsers = database.collection('wildhacks_apps');
    existingUsers.findOne({$or: [{"email" : email}, {"name" : name}]}, function(error, user) {
      Resume.create({"user" : user._id, "filepicker" : filepicker_url}, function(error, resume) {
        if (error)  {
          console.log(error);
        }
      });
    }); 
  });
});

router.get('/existing', function(req, res) {
  res.render('existing');
});

module.exports = router;
