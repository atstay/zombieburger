// Node Dependencies
var connection = require("./connection.js");

// Connect to MySQL database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// MySQL commands
var orm = {
  // selectAll()
  selectAll: function(cb) {
    // Run MySQL Query
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  // insertOne()
  insertOne: function(burger_name, cb) {
    connection.query(
      "INSERT INTO burgers SET ?",
      { burger_name: burger_name, devoured: false },
      function(err, result) {
        if (err) throw err;
        console.log(error);
        cb(result);
      }
    );
  },

  // updateOne()
  updateOne: function(burgerID, cb) {
    // Run MySQL Query
    connection.query(
      "UPDATE burgers SET ? WHERE ?",
      [{ devoured: true }, { id: burgerID }],
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

// Export the ORM object in module.exports.
module.exports = orm;
