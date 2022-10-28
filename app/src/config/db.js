const mysql = require("mysql");

const db = mysql.createConnection({
  host: "login-lecture-by-ugameze.cfophug6s2l9.ap-northeast-2.rds.amazonaws.com",
  user: "ugameze",
  password: "dnekekit",
  database: "login_lecture",
});

db.connect();

module.exports = db;