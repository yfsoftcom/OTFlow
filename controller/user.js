//导入模型信息
var model = require('../models')
var User = model.User;


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
            res.json(user);
        });
    })({'email': email},res);

};