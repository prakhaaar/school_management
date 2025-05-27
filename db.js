const mysql = require("mysql2/promise");
require("dotenv").config();

// Create a MySQL connection pool using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST || "shortline.proxy.rlwy.net",  // Railway public host
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 57261, // Railway public port
  user: process.env.DB_USER || "root",                        // Railway user
  password: process.env.DB_PASSWORD || "GDbaHothZkisUsoyPxJMcjPivTQSCjEx",  // Railway password
  database: process.env.DB_NAME || "railway",                 // Railway database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
