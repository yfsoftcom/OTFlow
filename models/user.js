var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    pass: { type: String },
    email: { type: String}

});

mongoose.model('User', UserSchema);