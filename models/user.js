var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    pass:  String ,
    email: String

});

mongoose.model('User', UserSchema);