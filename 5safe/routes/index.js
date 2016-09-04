var express = require('express');
var router = express.Router();
var controllerPush = require('../controller/controllerPush');
var db = require('../util/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {

    var sql = 'SELECT device_model FROM user';
    db.query(sql, function(err, result){
        if(err){
            res.status(500);
        }else{
            console.log(result);
            var push = new controllerPush();
            push.sendPushMessageFromGcm(result);
        }
    })
  res.render('index', { title: 'Express' });

});

module.exports = router;
