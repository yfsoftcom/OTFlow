//导入模型信息
var model = require('../models');
var Item = model.Item;

exports.apply= function (req, res, next) {
    var user = req.session.user;
    var item = new Item({userid:user._id,startTime:req.param('startTime'),endTime:req.param('endTime'),reason:req.param('reason')});

    item.save(function(err,result){
        if(err){
            console.log(err);

        }
        res.send('ok');
    });

};

/**
 * 通过用户来查询列表
 * @param req
 * @param res
 * @param next
 */
exports.list = function(req,res,next){

    console.log('item list');
    var user = req.session.user;
    console.log('id= %s',user._id);
    res.json(user);
};


exports.approve = function(req,res,next){
    console.log('item approve');
    var id = req.param('id');
    console.log('id= %s',id);
    res.send('ok');
};


exports.reject = function(req,res,next){
    console.log('item reject');
    var id = req.param('id');
    console.log('id= %s',id);
    res.send('ok');
};