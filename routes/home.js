var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home');
  /*res.render('../views/_home', function(err, html) {
    res.send(html);
  });*/
  /*if (req.cookies == null) {
    res.render('home');
  }
  if (req.cookies.status == "user") {
    res.render('bid', {
      title: 'Express'
    });
  } else if (req.cookies.status == "admin") {
    res.render('index', {
      title: 'Express'
    });
  }*/
  //res.sendFile(path.join(__dirname+'/views/home.html'));
});

module.exports = router;
