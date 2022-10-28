const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSWD,
  database: process.env.DB_DATABASE,

  // host: "login-lecture-by-ugameze.cfophug6s2l9.ap-northeast-2.rds.amazonaws.com",
  // user: "ugameze",
  // password: "dnekekIT3#",
  // database: "login_lecture",
});

db.connect();

module.exports = db;