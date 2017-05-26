var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/articles', function(req, res, next) {

  res.render('managearticles', { title: 'Manage', articles: {} });
});

router.get('/categories', function(req, res, next) {
  res.render('managecategories', {title:'Manage categories'})
})

module.exports = router;
