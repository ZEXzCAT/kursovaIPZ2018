var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.cookie('username', 'obj.username');
  res.render('login', {
    title: 'Express'
  });
});

router.post('/setcookie', function(req, res) {
  //console.log(req.params);
  var obj = req.body;
  console.log(obj.username);
  //res.cookie('username', obj.username);
});

module.exports = router;
