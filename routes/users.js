var express = require('express');
var router = express.Router();
var Resume = require("../models/resume");
var User = require("../models/user");

/* POST new user */
router.post('/new', function(req, res) {
  var data = {
    "name" : req.body.name,
    "email" : req.body.email,
    "year" : req.body.year,
    "university" : req.body.university,
    "major" : req.body.major,
    "international" : req.body.international === 'true',
    "epic" : req.body.epic === 'true'
  };
  console.log(data);
  User.create(data, function(error, user) {
    if (error)  {
      console.log(error);
      // Send to 500 page
    } 
    Resume.create({"user" : user._id, "filepicker" : filepicker_url}, function(error, resume) {
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

module.exports = router;
