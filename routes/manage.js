var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/articles', function(req, res, next) {

  res.render('managearticles', { title: 'Manage', articles: {} });
});

module.exports = router;
