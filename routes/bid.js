var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('bid', { title: 'Express' });
});
/*
 * GET userlist.
 */
router.get('/bidlist', function(req, res) {
    var db = req.db;
    var collection = db.get('bidlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * POST to addbid.
 */
router.post('/addbid', function(req, res) {
    var db = req.db;
    var collection = db.get('bidlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * DELETE to deleteuser.
 */
router.delete('/deletebid/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('bidlist');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;
