// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgr = {
  all: function(cb) {
    // burgers is table name
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // delete: function(condition, cb) {
  //   orm.delete("burgers", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burgr;
