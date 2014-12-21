var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    reason:  String,
    createDate: { type: Date, default: Date.now },
    hours:{type:Number,default:2},
    applyTime:String,
    dealTime:String,
    status:{type:String,default:'create'},
    userid:String,
    owner:{type:String,default:''}
});

mongoose.model('Item', ItemSchema);