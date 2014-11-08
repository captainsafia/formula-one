var express = require('express');
var router = express.Router();
var Resume = require("../models/resume");

router.get('/', function(req, res) {
  res.render('search');
});

router.get('/:query', function(req, res) {
  console.log(req.params.query);
});

module.exports = router;
