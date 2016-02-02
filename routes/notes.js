var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/notesy');

router.get('/', function(req, res) {
    var collection = db.get('notes');
    collection.find({}, function(err, notes){
        if (err) throw err;
      	res.json(notes);
    });
});

module.exports = router;
