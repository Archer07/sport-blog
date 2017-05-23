var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sport Log', desc: 'Your Platform to Tell the World About your Sport Interests' });
});

module.exports = router;
