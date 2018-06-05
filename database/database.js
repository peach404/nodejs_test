// mysql 위치 : /usr/local/mysql/bin
//version 8 부터 plugin 방법이 변경되었다
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

var mysql = require('mysql');

var config = mysql.createConnection ({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "mydb",
    insecureAuth : true

});

module.exports = config;

// con.connect(function(err) {
//     console.log('try connect');
//     if (err) throw err;
//     console.log("Connected!");
// });
