const connection = require("../controllers/DatabaseController");
const createError = require("http-errors");
class UserService
{
    tmpPassword;
    addUser(id,email,callback)
    {
        if(id) {
            this.tmpPassword = Math.floor(Math.random() * (200 - 100) + 100);
            connection.client.query('INSERT INTO "authData" ("ID","email","password","emailToken") values ($1,$2,$3,$4)', [id, email, this.tmpPassword,], function (error, results) {
                // If there is an issue with the query, output the error
                if (error) {
                    return callback(createError(500, error.message));
                }
                return callback(results.rows.length > 0);
            });
        }
    }

    updateUser(id,password,email,callback)
    {
        if(id)
        {
            connection.client.query('UPDATE "authData" SET "password" = $1, "email" = $2 WHERE "ID" = $3 ', [password, email, id], function (error, results) {
                // If there is an issue with the query, output the error
                if (error) {
                    return callback(createError(500, error.message));
                }
                return callback("updated");
            });
        }
    }

    deleteUser(id,callback) {
        if(id)
        {
            connection.client.query('DELETE FROM  "authData" WHERE "ID" = $1 ', [id], function (error, results) {
                // If there is an issue with the query, output the error
                if (error) {
                    return callback(createError(500, error.message));
                }
                return callback("deleted");
            });
        }
    }

    getUser(id,callback)
    {
        if(id)
        {
            connection.client.query('SELECT *  FROM  "authData" WHERE "ID" = $1 ', [id], function (error, results) {
                // If there is an issue with the query, output the error
                if (error) {
                    return callback(createError(500, error.message));
                }
                return callback(results.rows.length> 0);
            });
        }

    }
}

module.exports = new UserService();