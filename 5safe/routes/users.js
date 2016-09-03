var express = require('express');
var router = express.Router();
var db = require('../util/db.js');

var ServerBoolResult = {
  bResult : false
};


// var sql = 'SELECT * FROM user';
// db.query(sql, function(err, rows, fields){
//   if(err){
//     console.log(err);
//   } else {
//     // console.log('rows',rows);
//     // console.log('fields',fields);
//     // for(var i = 0; i<rows.length; i++){
//       console.log(rows);
//     }
// });


// var sql = 'insert into user (user_kakao_id) VALUES("mash-up@co.kr")';
// db.query(sql, function(err, rows, fields){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(rows.insertId);
//   }
// });

router.post('/login',function(req,res){
  var checkUser = req.body.user_kakao_id;

  var sql = 'SELECT user_kakao_id FROM user WHERE user_kakao_id = ?';
  db.query(sql, checkUser, function(err, result){
    if (err) {
      res.status(500);
      //오류 발생
    } else {
      if (result[0] == null) {
        ServerBoolResult.bResult = false;
        // 신규 사용자일 경우
      }else{
        ServerBoolResult.bResult = true;
        // 기존 사용자일 경우
      }
    }
    res.json(ServerBoolResult);
  });
});
//기존 사용자인지 신규 가입자인지 확인

router.post('/register',function(req,res){

  var user = {
    user_kakao_id : req.body.user_kakao_id,
    // latitude : req.body.latitude,
    // longitude : req.body.longitude
  };

  var sql = 'INSERT INTO user SET ?';
  db.query(sql, user, function(err, result){
    if (err) {
      res.status(500);
      //오류 발생
    } else {
      ServerBoolResult.bResult = true;
    }
    res.json(ServerBoolResult);
  });
});
//회원가입

router.post('/')

router.post('/device', function(req, res){

    var device = [req.body.device_model, req.body.user_kakao_id];

    var sql = 'UPDATE user set device_model=? WHERE user_kakao_id=?';
    db.query(sql, device, function(err, result){
      if (err) {
        res.status(500);
      } else {
        ServerBoolResult.bResult = true;
      }
      res.json(ServerBoolResult);
    });
});

router.post('/location',function(req, res){

  var location = [req.body.latitude,req.body.longitude,req.body.user_kakao_id];
  // var checkUser = req.body.user_kakao_id;

  // var sql = 'SELECT user_kakao_id FROM user WHERE user_kakao_id = ?';
  var sql = 'UPDATE user set latitude=?, longitude=? where user_kakao_id=?';

  db.query(sql, location, function(err, result){
    if(err){

      res.status(500);
        // res.send('he');
    } else{
            // res.send('he');

    //     if(result[0] != null) {
    //
    //       db.query( 'UPDATE user set?', user, function(err, result){
    //           if(err){
    //             // res.send('he');
    //             res.stauts(500);
    //
    //           } else {
    //             res.send('he');
    //             ServerBoolResult.bResult = false;
    //           }
    //           res.json(ServerBoolResult);
    //       });
    //     }
        ServerBoolResult.bResult = true;
    }
    res.json(ServerBoolResult);
  });
});

module.exports = router;
