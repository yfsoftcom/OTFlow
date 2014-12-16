var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db, function (err) {
    if (err) {
        console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }else{
        console.log('connectioned success!');
    }
});

// models
require('./user');

exports.User = mongoose.model('User');