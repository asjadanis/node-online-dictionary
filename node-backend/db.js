const mysql = require("mysql2");

const connectDB = () => {
  console.log("Connecting to database...");
  const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  return connection;
};

module.exports = connectDB;
