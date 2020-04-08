var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        console.log("TableImput-SelectAll:", tableInput)
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;

            console.log("got here", result);
            cb(result)
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols;
        queryString += ") ";
        queryString += "VALUES (";
        queryString += vals;
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result)
            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function (table, objColVals, condition, cb) {


        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objColVals;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },


    deleteOne: function (table, condition, cb) {


        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;
