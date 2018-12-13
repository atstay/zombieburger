// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  port: 3306,
  user: "ba847175ed5197",
  password: "1f28d958",
  database: "heroku_593520653950a97"
});

//ba847175ed5197:1f28d958@us-cdbr-iron-east-01.cleardb.net/heroku_593520653950a97?reconnect=true

// Connect to MySQL database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
