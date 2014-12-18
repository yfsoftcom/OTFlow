var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    reason:  String,
    createDate: { type: Date, default: Date.now },
    startTime:String,
    endTime:String,
    applyTime:String,
    dealTime:String,
    status:{type:String,default:'create'},
    userid:String
});

mongoose.model('Item', ItemSchema);