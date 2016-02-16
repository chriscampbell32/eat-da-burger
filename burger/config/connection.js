var mysql = require("mysql");

exports.connection = 
connection = mysql.CreateConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "burgers_db"
});