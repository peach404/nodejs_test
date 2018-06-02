var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/isusers', function(req, res, next) {
  var queryId = req.query.id;
  console.log('queryId', queryId);
  
  queryId ? res.send(queryId) : res.send('yes is users');
});

module.exports = router;
