var path = require('path') ;

module.exports = {
    // mongodb 配置
    db: 'mongodb://localhost/otflow',
    db_name: 'otflow',


    name: 'OTFlower', // 名字
    description: '加班申请系统', // 描述
    keywords: '',

    session_secret: 'otflow_secret',
    auth_cookie_name: 'otflow',

    // 程序运行的端口
    port: 3000,

    // 邮箱配置
    mail_opts: {
        host: 'smtp.126.com',
        port: 25,
        auth: {
            user: 'club@126.com',
            pass: 'club'
        }
    }
};