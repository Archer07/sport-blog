var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('articles', { title: 'Posts', desc: 'Latest Articles about Sport' });
});

module.exports = router;
