var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('home');
  if (req.cookies.status == '') {
    res.render('services');
  } else if (req.cookies.status == 'admin') {
    res.render('servicesA', {
      user: req.cookies.username
    });
  }
  else if (req.cookies.status == 'user') {
    res.render('servicesU', {
      user: req.cookies.username
    });
  }
  else if (req.cookies.status == 'worker') {
    res.render('servicesW', {
      user: req.cookies.username
    });
  }
});

module.exports = router;
