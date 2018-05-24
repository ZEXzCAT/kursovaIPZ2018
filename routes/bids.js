var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('home');
  if (req.cookies.status == '') {
    res.render('error');
  } else if (req.cookies.status == 'admin') {
    res.render('bidsA', {
      user: req.cookies.username
    });
  }
  else if (req.cookies.status == 'user') {
    res.render('bidsU', {
      user: req.cookies.username
    });
  }
  else if (req.cookies.status == 'worker') {
    res.render('bidsW', {
      user: req.cookies.username
    });
  }
});

router.get('/bidform', function(req, res) {
  if (req.cookies.status == 'admin') {
    res.render('bidform', {
      user: req.cookies.username
    });
  }
  else if (req.cookies.status == 'user') {
    res.render('bidform', {
      user: req.cookies.username
    });
  }
  else if (req.cookies.status == 'worker') {
    res.render('bidform', {
      user: req.cookies.username
    });
  }
});

module.exports = router;
