var express = require('express');
var router = express.Router();
var Resume = require("../models/resume");

/* GET user listing. */
router.get('/:id', function(req, res) {
  var id = req.params.id;
  Resume.findOne({_id: id}).populate('user').exec(function(error, resume) {
    res.render('user', {
      person: resume
    });
  })
});

module.exports = router;
