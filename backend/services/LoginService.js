const connection = require("../controllers/DatabaseController");
const createError = require("http-errors");

class LoginService {

    verifyPassword(email, password, callback)
    {
        // Execute SQL query that'll select the account from the database based on the specified email and password
        connection.client.query('SELECT * FROM "authData" WHERE "email" = $1 AND "password" = $2', [email, password], function(error, results, fields) {
        // connection.client.query('SELECT * FROM "authData"', function(error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) {
                return callback(createError(500, error.message));
            }

            // If the account exists
            return callback(results.rows.length > 0);
        });
    }

    getUserId(email, callback)
    {
        connection.client.query('SELECT "ID" FROM "authData" WHERE "email" = $1', [email], function (error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) {
                return callback(createError(500, error.message));
            }

            if (results.rows.length > 0) {
                //set id
                return callback({
                    userID: results.rows[0].ID
                })
            }

            return callback(createError(500, "User could not be found"));
        })


    }

    getType(id, callback)
    {
        connection.client.query('SELECT "Type" FROM "authData" WHERE "ID" = $1', [id], function (error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) {
                return callback(createError(500, error.message));
            }

            //TODO  WHO IS CHECKING TYPES?
            if (results.rows.length > 0)
            {
                return callback({
                    userType: results.rows[0].Type
                })

            }

        })

    }
}

module.exports = new LoginService();

