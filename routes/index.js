var express = require('express');
var site = require('../controller/site');
var user = require('../controller/user');
var router = express.Router();

// home page
router.get('/', site.index);

//用户登录
router.post('/user/login', user.login);


router.get('/main', site.main);


module.exports = router;
