var express = require('express');
var site = require('../controller/site');
var user = require('../controller/user');
var item = require('../controller/item');
var admin = require('../controller/admin');
var router = express.Router();

// home page
router.get('/', site.index);

//用户登录
router.post('/user/login', user.login);

//获取主页
router.get('/main', site.main);

//获取填写表单的页面
router.get('/item/create', site.create);

//提交申请
router.post('/item/apply',item.apply);

//同意申请
router.post('/item/approve',item.approve);

//同意申请
router.post('/item/reject',item.reject);

//获取申请列表
router.get('/item/list',item.list);

//获取申请列表
router.get('/admin/item/list',admin.list);


module.exports = router;
