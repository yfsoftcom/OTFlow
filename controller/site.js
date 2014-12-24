
exports.index = function (req, res, next) {
    res.render('login');
};


exports.signup = function (req, res, next) {
    res.render('signup');
};

exports.logout = function (req, res, next) {
    req.session.user = undefined;
    console.log('logout');
    res.redirect('/');
};


exports.create = function (req, res, next) {
    res.render('itemform');
};


exports.modifypwd = function (req, res, next) {
    res.render('modifypass');
};
