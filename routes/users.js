var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/isusers', function(req, res, next) {
  res.send('yes is users');
});

router.get('/isusers/:id', function(req, res, next) {
  let paramsId = req.params.id;
  console.log('paramsId', paramsId);

  const params = {
    "params": paramsId,
    "status": 200,
    "hello": 'hello'
  }

  res.send(params);

});

router.post('/pw', function(req,res,next){

  let a = req.body.pw;
  const params = {'goodPw': a};
  res.status(200).send(params);
})

router.get('/*', function(req, res, next) {
  res.send('else');
});

module.exports = router;
