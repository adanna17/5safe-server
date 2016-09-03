var express = require('express');
var router = express.Router();
var controllerPush = require('../controller/controllerPush');

/* GET home page. */
router.get('/', function(req, res, next) {
    var push = new controllerPush();
    push.sendPushMessage(new Array('aaa', 'bbb', 'ccc'));
  res.render('index', { title: 'Express' });

});

module.exports = router;
