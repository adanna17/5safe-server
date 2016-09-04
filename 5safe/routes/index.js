var express = require('express');
var router = express.Router();
var controllerPush = require('../controller/controllerPush');
var db = require('../util/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {

    var sql = 'SELECT device_model FROM user';
    db.query(sql, function(err, results){
        if(err){
            res.status(500);
        }else{
            var push = new controllerPush();
            console.log('db query result ', results);
            results.forEach(function(result){
                console.log('device_token ', result.device_model);
                push.sendPushMessageFromGcm(result.device_model);
            });
        }
    })
  res.render('index', { title: 'Express' });

});

module.exports = router;
