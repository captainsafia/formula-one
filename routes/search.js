var express = require('express');
var router = express.Router();
var Resume = require("../models/resume");

router.get('/', function(req, res) {
  res.render('search');
});

router.post('/', function(req, res) {
  var searchData = {
    major: req.body.major,
    year: req.body.year,
    international : req.body.international == 'yes'
  };
  Resume.find({major: searchData.major, 
              year : searchData.year, 
              international : searchData.international})
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

module.exports = router;
