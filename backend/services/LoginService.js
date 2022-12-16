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

    getUserId(email, callback) {
        // TODO HANDLE PATHS!
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

        /*
        // Dummy users
        let userID;
        switch (email) {
            case "staff":
                userID = 1;
                break;
            case "outgoing":
                userID = 2;
                break;
            case "incoming":
                userID = 3;
                break;
            default:
                userID = false;
        }

         */
    }
}

module.exports = new LoginService();
