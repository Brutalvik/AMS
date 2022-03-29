const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "welcome@1234",
  database: "ams",
});

db.connect((err) => {
  if (err) throw err;
  console.log(`DB connected successfully`);
});

module.exports = db;
