var express = require('express');
var router = express.Router();
var axios = require('axios');

const BMASTER_API = 'http://sample.bmaster.kro.kr';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/isusers', function(req, res, next) {
  var queryId = req.query.id;
  console.log('queryId', queryId);
  
  queryId ? res.send(queryId) : res.send('yes is users');
});

//GET/contacts 연락처 목록 조회 기능, 페이지 번호가 0인 경우 전체 데이터 조회
router.get('/contacts', function(req, res, next){
  let pageno = req.query.pageno;
  let pagesize = req.query.pagesize;



  axios.get(`http://sample.bmaster.kro.kr/contacts?pageno=${pageno}&pagesize=${pagesize}`)
      .then(result => {

          res.status(200).send(result.data);
          console.log('good');
          console.log(result.data);
      }).catch(e => {
        console.log('err');
        console.log(e);
        res.status(400).send(e);
  });

});
//contacts의 특정 연락처 한건 조회 예시 num : 1528045203206로 해볼
router.get('/contacts/:num', function(req, res, next) {
    let num = req.params.num;

    axios.get(`${BMASTER_API}/contacts/${num}`)
        .then(result => {

            console.log(result.data);
            res.status(200).send(result.data);
        }).catch(e =>{
            console.log('err');
            console.log(e);
            res.status(400).send(e);
    });
});

//이름을 이용해 연락처 검색
router.get('/contacts/search/:name', function(req, res, next){
    let name = req.params.name;

    axios.get(`${BMASTER_API}/contacts/search/${name}`)
        .then(result => {
            console.log('good');
            console.log(result.data);
            res.status(200).send(result.data);
        }).catch(result => {
            console.log('err');
            console.log(e);
            res.status(400).send(result.data);
    });
});

router.post('/contacts', function(req, res, next){
    let name = req.body.name;
    let tel = req.body.tel;
    let address = req.body.address;

    const params={
        "name" : name,
        "tel" : tel,
        "address" : address
    };

    axios.post(`${BMASTER_API}/contacts/`,params)
        .then(result => {
            console.log(result.data);
            res.status(200).send(result.data);

        }).catch(result =>{
            console.log('err');
            console.log(e);
            res.status(400).send(e);
    });
});

router.post('/contacts/batchinsert', function(req, res, next){
    let name = req.body.name;
    let tel = req.body.tel;
    let address = req.body.address;
    let data = req.body.data;
    console.log(data);

    const params={
        "name" : name,
        "tel" : tel,
        "address" : address
    };

    // axios.all([
    //     axios.post(`${BMASTER_API}/contacts/batchinsert`,params),
    //     axios.post(`${BMASTER_API}/contacts/batchinsert`,params),
    //     axios.post(`${BMASTER_API}/contacts/batchinsert`,params)
    //     ]).then(result => {
    //         console.log(result.data);
    //         res.status(200).send(result.data);
    //
    //     }).catch(result =>{
    //     console.log('err');
    //     console.log(e);
    //     res.status(400).send(e);
    // });

});
module.exports = router;

