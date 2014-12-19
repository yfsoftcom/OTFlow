var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    pass:  String ,
    email: String,
    name:{type:String,default:'unnamed'}

});

mongoose.model('User', UserSchema);