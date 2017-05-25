var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sportBlog');

var db = mongoose.connection;

/* GET home page. */
router.get('/', function(req, res, next) {
  db.collection('categories').find().toArray(function(err, cats) {
    if (err) {
      console.log(err);
    } else {
        res.render('categories', { title: 'Gategories', desc: 'Choose your category', cats: cats });

    }
  });
//  res.render('categories', { title: 'Gategories', desc: 'Choose your category' });
});


router.get('/:id', function(req, res, next) {
  db.collection('categories').find().toArray(function(err, cats) {
    if (err) {
      console.log(err);
    } else {
      console.log(req.params.id);
      var title = req.params.id.toUpperCase() + ' Articles'
        res.render('articles', { title: title,  desc: 'Articles sorted by category', cats: cats });

    }
  });
//  res.render('categories', { title: 'Gategories', desc: 'Choose your category' });
});



module.exports = router;
