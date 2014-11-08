var express = require('express');
var router = express.Router();
var Resume = require("../models/resume");

router.get('/', function(req, res) {
  res.render('search');
});

router.post('/', function(req, res) {
  console.log(req.body.query);
});

module.exports = router;
