const mailer = require( 'nodemailer');
const createError = require("http-errors");
const databaseController = require("./DatabaseController");
const userService = require("../services/UserService")


class EmailController {
    static counter = 0;
    sendResetPasswordEmail(email, token, callback)
    {
        databaseController.client.query('SELECT * FROM "authData" WHERE "email" = $1', [email], function(error, results, fields) {
            if (error)
            {
                return callback(createError(500, error.message));
            }
            else
            {
                if(results.rows.length > 0)
                {
                    let subject = "Reset your password";
                    let content = "Hi!<br><br>" +
                        "Click on the following link to reset your password: <a href='https://bilasmus.com/reset?token=" + token + "'>https://bilasmus.com/reset?token=" + token + "</a><br>" +
                        "If you did not make this request, you can ignore this mail.<br><br>" +
                        "Bilasmus Team";

                    this.#sendEmail(email, subject, content, callback);
                }
            }
        });
    }

    sendWelcomeEmail(email, token, callback) {
        databaseController.client.query('SELECT "ID" FROM "authData" WHERE "email" = $1',[email],function(error,results,fields) {
            if(error)
            {
                return callback(createError(500,error.message));
            }
            else
            {
                if(results.rows.length > 0)
                {
                    let subject = "Welcome to Bilasmus, user " + results.rows[0] + "!";
                    let content = "Hi!<br><br>" +
                        "Welcome to the Bilasmus! You can reach your account via " + results.rows[0] + "@bilkent.edu.tr" + "and provided password "
                        userService.getPassword(results.rows[0],callback) + ". If you did not make this request, you can ignore this mail.<br><br>" +
                        "Sincerely, Bilasmus Team";

                    this.#sendEmail(email, subject, content, callback);
                }
            }
        });
    }


    sendMessageEmail(email, callback) {
        let subject = "You have new messages";
        let content = "..."; // TODO: Add content

        // TODO: Get user name
        // TODO: Get latest unread messages

        this.#sendEmail(email, subject, content, callback);
    }

    #sendEmail(email, subject, content, callback) {
        // let transporter = mailer.createTransport( {
        //     host: 'smtp.gmail.com',
        //     port: 587,
        //     auth: {
        //         user: process.env.EMAIL_ADDRESS,
        //         pass: process.env.EMAIL_PASSWORD
        //     },
        //     tls: {
        //         ciphers:'SSLv3'
        //     }
        // });

        let transporter = mailer.createTransport( {
            host: 'smtp-relay.sendinblue.com',
            port: 587,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: {
                ciphers:'SSLv3'
            }
        });

        transporter.sendMail({
            from: "Bilasmus<" + process.env.EMAIL_ADDRESS + ">",
            to: email,
            subject: subject,
            html: content
        }, (err, info) => {
            if (err) {
                callback(createError(500, "Email could not be sent: " + (process.env.PRODUCTION ? err : "...")));
            }
            else {
                return callback({
                    message: info.response
                });
            }
        });
    }
}

module.exports = new EmailController();