var express = require('express');
var fs = require("fs");
var router = express.Router();

router.get('/', function(req, res) {
  res.render('bid', {
    title: 'Express'
  });
});
/*
 * GET userlist.
 */
router.get('/bidlist', function(req, res) {
  var db = req.db;
  var collection = db.get('bidlist');
  collection.find({}, {}, function(e, docs) {
    res.json(docs);
  });
});

/*
 * POST to addbid.
 */
router.post('/addbid', function(req, res) {
  console.log(req.body);
  var db = req.db;
  var collection = db.get('bidlist');
  collection.insert(req.body, function(err, result) {
    res.send(
      (err === null) ? {msg: ''} : {msg: err}
    );
  });
});

router.put('/updatebid/:id', function(req, res) {
  //console.log(req.params.id);
  var db = req.db;
  var collection = db.get('bidlist');
  var id = req.params.id;
  collection.update({'_id': id}, { $set: req.body }, function(err, result) {
    res.send(
      (err === null) ? {msg: ''} : {msg: err}
    );
  });
});

router.post('/report', function(req, res) {
  fs.writeFile("report.txt", req.body, function(error) {
    if (error) throw error; // если возникла ошибка
    console.log("Звіт створено.");
  });
});

module.exports = router;
