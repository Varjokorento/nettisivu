var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "This is Kalle's website!", message:"Hello there!" });
});

router.get('/artstuff', function(req, res, next) {
  res.render('artstuff');
});

router.get('/blogstuff', function(req, res, next) {
  res.render('blogstuff');
});

router.get('/computerstuff', function(req, res, next) {
  res.render('computerstuff');
});

router.get('/formstuff', function(req, res, next) {
  res.render('formstuff');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/bio', function(req, res, next) {
  res.render('bio');
});

module.exports = router;
