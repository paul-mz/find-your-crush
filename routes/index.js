var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home.ejs');
});

router.get('/accueil', function(req, res, next) {
  res.render('pages/home.ejs');
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('pages/about.ejs');
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact.ejs');
});
/* GET account creation page. */
router.get('/account-creation', function(req, res, next) {
  res.render('pages/creation-landing.ejs');
});


module.exports = router;
