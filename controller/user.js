//导入模型信息
var model = require('../models')
var User = model.User;
var Item = model.Item;

/**
 * 用户登录的控制器
 * @param req
 * @param res
 * @param next
 */
exports.login = function(req,res,next){
    var email = req.param('user.email');
    //通过用户的dao查询到用户的基本信息，通过email返回用户信息
    (function(condition,res){
        console.log(condition);
        User.findOne(condition,function (err, user) {
            if (err) {
                return next(err);
            }
            req.session.user = user;
            if(user.isAdmin){
                //管理员
                res.redirect("/admin/item/list/all");
            }else{
                //普通用户
                res.redirect("/user/item/list/all");
            }

        });
    })({'email': email},res);
};

exports.modifypwd = function(req,res,next){
    var condition = {_id:req.session.user._id};
    //通过用户的dao查询到用户的基本信息，通过email返回用户信息
    (function(condition,sets,res){
        User.update(condition,
            {$set : sets},
            function(err,result){
                res.send('New Password Commit!');
            });
    })(condition,{pass:req.param('user.newpass')},res);
};

/**
 * 用户注册的控制器
 * @param req
 * @param res
 * @param next
 */
exports.signup = function(req,res,next){

    (function(data,res){
        var user = new User(data);
        console.log(user);
        user.save(function (err,user) {
            if (err) {
                return next(err);
            }
            req.session.user = user;
            if(user.isAdmin){
                //管理员
                res.redirect("/admin/item/list/all");
            }else{
                //普通用户
                res.redirect("/user/item/list/all");
            }
        });

    })({email: req.param('user.email'),name:req.param('user.name'),pass:req.param('user.pass')},res);
};

/**
 * 获取用户自己的加班申请列表
 * @param req
 * @param res
 * @param next
 */
exports.list = function(req,res,next){
    var user = req.session.user;
    var status = req.params.status;
    var condition = status=='all' ? {userid:user._id}:{userid:user._id,status:status};
    (function(condition,res){
        Item.find(condition).sort({createDate:-1}).exec(function(err,result){
            if(err){
                return next(err);
            }
            res.render('list',{
                items: result
            });
        });
    })(condition,res);
};
