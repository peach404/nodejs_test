var express = require('express');
var router = express.Router();
var db = require('../database/database');
// import db from '../database/database';

router.get('/', function (req, res, next) {
    // if(!req.session.user.admin){
    //     res.redirect('/');
    // }
    var sql = 'SELECT * FROM members';
    db.query(sql, [], function (err, result) {
        if (err) console.log(err);
        // res.send(result);
        go(result);
    });

    // console.log(a);
});

router.get('/edit', function (req, res, next) {
    console.log('edit');
    var u = req.session.user;
    if (!u.admin) {
        res.redirect('/');
    }
    res.render('adminEdit', {session: u});
});

function go(rows) {
    // console.log(rows);
    // 쿼리에서 받아온 데이터 활용해서 함수 적용
}

module.exports = router;