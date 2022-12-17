const db = require("../controllers/DatabaseController");
const createError = require("http-errors");
const Auth = require("../models/Auth");

class RegisterService {
    generateRegistrationToken(email, id, name, type, callback) {
        const token = this.#generateToken(32);

        if (email && token) {
            db.client.query('INSERT INTO "authData" ("email","emailToken") values ($1,$2)', [email, token], function (error,results) {
                // If there is an issue with the query, output the error
                if (error)
                {
                    return callback(createError(500, error.message));
                }
                return callback(results.rows.length > 0);
            });
        }
    }

    generateResetPasswordToken(email, id, callback) {
        const token = this.#generateToken(32);

        let auth = new Auth();
        auth.setId(id).setEmailToken(token);

        db.update(auth, (result) => {
            if (result instanceof Error) {
                return callback(createError(500, result.message));
            }

            return callback(token);
        });
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
