
exports.index = function (req, res, next) {
    res.render('login');
};


exports.main = function (req, res, next) {
    res.render('main');
};


exports.create = function (req, res, next) {
    res.render('itemform');
};
