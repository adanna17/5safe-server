var mysql = require('mysql');

var conn = ({
  host : 'localhost',
  user : 'user',
  password : '159236',
  database : '5safe'
});

module.exports = mysql.createConnection(conn);
