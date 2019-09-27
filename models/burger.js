// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(col, val, cb) {
    orm.insertOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  updateOne: function(col, val, cb) {
    orm.updateOne("burgers", col, val, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;