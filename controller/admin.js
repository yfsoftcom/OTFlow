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
    var status = req.params.status;
    var condition = status=='all' ? {}:{status:status};
    Item.find(condition).sort({createDate:-1}).exec(function(err,result){
        res.render('admin/list',{
            items: result
        });
    });

};
