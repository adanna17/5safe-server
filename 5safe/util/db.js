var mysql = require('mysql');

var conn = ({
  host:'moamoa-database.cmclvpcsh0vw.ap-northeast-1.rds.amazonaws.com',
  port:'3306',
  user:'jungmin',
  password:'6k9ojw098427',
  database : '5safe'
});

module.exports = mysql.createConnection(conn);
