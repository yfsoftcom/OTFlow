var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    pass:  String ,
    email: String,
    name:{type:String,default:'unnamed'},
    isAdmin:{type:Boolean,default:false}
});

mongoose.model('User', UserSchema);