const mysql = require("mysql2/promise");
const config = {
  host: "us-cdbr-east-06.cleardb.net",
  port: "3306",
  user: "bc94ccbca1d6ca",
  password: "bd35e5a6",
  database: "coin",
};
const pool = mysql.createPool(config);

module.exports = pool;