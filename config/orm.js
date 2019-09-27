// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";

        console.log(queryString);

        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (table, col, val, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";

        console.log(queryString);

        connection.query(queryString, [table, col, val], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (table, col, val1, val2, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";

        console.log(queryString);

        connection.query(queryString, [table, col, val1, val2], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};

module.exports = orm;