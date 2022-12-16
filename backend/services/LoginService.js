const connection = require("../controllers/DatabaseController");
const express = require("express");
const app = express()


class LoginService {

    verifyPassword(email, password)
    {
        this.email = email;
        this.password = password;
        // TODO HANDLE PATHS!
        app.post('https://bilasmus.uc.r.appspot.com/auth/login', function(request, response) {
            // Capture the input fields
            let email = request.body.email;
            let password = request.body.password;
            // Ensure the input fields exists and are not empty
            if (email && password) {
                // Execute SQL query that'll select the account from the database based on the specified email and password
                connection.client.query('SELECT * FROM public."authData" WHERE "email" = ?  AND "password" = ?', [email, password], function(error, results, fields) {
                    // If there is an issue with the query, output the error
                    if (error) throw error;
                    // If the account exists
                    if (results.length > 0) {
                        // Authenticate the user
                        request.session.loggedin = true;
                        request.session.email = email;

                        // Redirect to home page
                        response.redirect('/home');
                        return true;
                    } else
                    {
                        response.send('Incorrect Username and/or Password!');
                    }
                    response.end();
                    return false;
                });
            } else {
                response.send('Please enter Username and Password!');
                response.end();
                return false;
            }
        });
    }

    getUserId(email) {
        this.email = email;
        let userID;
        // TODO HANDLE PATHS!
        app.post('/auth', function(request, response) {
            if (email) {
                connection.client.query('SELECT "ID" FROM public."authData" WHERE "email" = ?', [email], function (error, results, fields) {
                    // If there is an issue with the query, output the error
                    if (error) throw error;
                    if (results.length > 0) {
                        //set id
                        userID = results;
                    }

                })
            }
        });

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

        return userID;
    }
}

module.exports = new LoginService();
