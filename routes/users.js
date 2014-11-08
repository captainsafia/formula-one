var express = require('express');
var router = express.Router();
var Resume = require("../models/resume");
var User = require("../models/user");

/* GET user listing. */
router.get('/:id', function(req, res) {
  var id = req.params.id;
  Resume.findOne({_id: id}).populate('user').exec(function(error, resume) {
    res.render('user', {
      person: resume
    });
  })
});

/* POST new user */
router.post('/new', function(req, res) {
  var data = req.body;
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
