var express = require('express');
var router = express.Router();
var Resume = require("../models/resume");

router.get('/:key', function(req, res) {
  var key = req.params.key;
  if (valid(key)) {
    console.log('Search page!');
  } else {
    console.log('Auth error page!');
  }
});
