
exports.index = function (req, res, next) {
    res.render('login');
};


exports.main = function (req, res, next) {
    console.log('site main');
    res.render('main');
};