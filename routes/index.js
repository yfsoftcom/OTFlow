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

//用户登出
router.get('/logout', site.logout);

//用户注册
router.get('/user/signup', site.signup);

//用户注册
router.post('/user/signup', user.signup);

//获取填写表单的页面
router.get('/item/create', site.create);

//提交申请
router.post('/item/apply',item.apply);

//同意申请
router.get('/item/approve/:id',item.approve);

//驳回申请
router.get('/item/reject/:id',item.reject);

//获取申请列表
router.get('/user/item/list/:status',user.list);

//获取申请列表
router.get('/admin/item/list/:status',admin.list);

router.get('/item/review/:id',item.review);


module.exports = router;
