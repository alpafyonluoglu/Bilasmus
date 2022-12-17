const connection = require("../controllers/DatabaseController");
const createError = require("http-errors");

class RegisterService {
    generateRegistrationToken(email, callback) {
        const token = this.#generateToken(32);
        this.email = email;
        if (email && token) {
            connection.client.query('INSERT INTO "authData" ("email","emailToken") values ($1,$2)', [email, token], function (error,results) {
                // If there is an issue with the query, output the error
                if (error)
                {
                    return callback(createError(500, error.message));
                }
                return callback(results.rows.length > 0);
            });
        }
    }

    #generateToken(length)
        {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let token = '';
        for (let i = 0; i < length; i++) {
            token += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return token;
    }
}

module.exports = new RegisterService();
