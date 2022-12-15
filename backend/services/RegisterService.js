const connection = require("../controllers/DatabaseController");
const express = require("express");
class RegisterService {
    generateRegistrationToken(email, callback) {
        const token = this.#generateToken(32);
        this.email = email;
        if (email && token) {
            connection.client.query('INSERT INTO public."authData" ("email","emailToken") values (?,?)', [email, token], function (error) {
                // If there is an issue with the query, output the error
                if (error) throw error
            });
            return callback(token);
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