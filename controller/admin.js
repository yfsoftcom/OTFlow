//导入模型信息
var model = require('../models');
var Item = model.Item;

/**
 * 通过用户来查询列表
 * @param req
 * @param res
 * @param next
 */
exports.list = function(req,res,next){

    console.log('admin item list');
    Item.find(function(err,result){
        res.render('list',{
            items: result
        });
    });

};
