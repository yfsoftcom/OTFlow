//导入模型信息
var model = require('../models');
var Item = model.Item;

exports.apply= function (req, res, next) {
    var user = req.session.user;
    var item = new Item({userid:user._id,owner:user.name,hours:req.param('hours'),reason:req.param('reason')});

    item.save(function(err,result){
        if(err){
            return next(err);
        }
        res.redirect('/user/item/list/create');
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
    var condition = {_id:req.params.id};
    Item.update(condition,
        {$set : {status:'approved',dealTime:new Date().format('yyyy-MM-dd hh:mm')}},
        function(err,result){
            res.redirect('/admin/item/list/create');
    });
};


exports.reject = function(req,res,next){
    var condition = {_id:req.params.id};
    Item.update(condition,
        {$set : {status:'rejected',dealTime:new Date().format('yyyy-MM-dd hh:mm')}},
        function(err,result){
            res.redirect('/admin/item/list/create');
        });
};


exports.review = function(req,res,next){

    console.log(req.params.id);
    Item.findOne({_id:req.params.id},function(err,item){
        if(err){
            return next(err);
        }
        res.render('admin/review',{
            item: item
        });
    });
}