var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sportBlog');

var db = mongoose.connection;

/* GET home page. */
router.get('/', function(req, res, next) {
  db.collection('categories').find({}, {_id:0}).toArray(function(err, cats) {
    if (err) {
      console.log(err);
    } else {
        console.log(cats);
        res.render('categories', { title: 'Gategories', desc: 'Choose your category', cats: cats });

    }
  });
//  res.render('categories', { title: 'Gategories', desc: 'Choose your category' });
});

module.exports = router;
