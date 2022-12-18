const mailer = require('nodemailer');
const createError = require("http-errors");
const databaseController = require("./DatabaseController");
const userService = require("../services/UserService")


class EmailController {
    sendResetPasswordEmail(email, token, callback) {
        let subject = "Reset your password";
        let content = "Hi!<br><br>" +
            "Click on the following link to reset your password: <a href='https://bilasmus.com/reset?token=" + token + "'>https://bilasmus.com/reset?token=" + token + "</a><br>" +
            "If you did not make this request, you can ignore this e-mail.<br><br>" +
            "Bilasmus Team";

        this.#sendEmail(email, subject, content, callback);
    }

    sendWelcomeEmail(email, token, callback) {
        let subject = "Welcome to Bilasmus!";
        let content = "Hi!<br><br>" +
            "Welcome to Bilasmus! Click on the following link to complete your account registration: <a href='https://bilasmus.com/reset?token=" + token + "'>https://bilasmus.com/reset?token=" + token + "</a><br>" +
            "If you did not make this request, you can ignore this e-mail.<br><br>" +
            "Bilasmus Team";

        this.#sendEmail(email, subject, content, callback);
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

        let transporter = mailer.createTransport({
            host: 'smtp-relay.sendinblue.com',
            port: 587,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: {
                ciphers: 'SSLv3'
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
            } else {
                return callback({
                    message: info.response
                });
            }
        });
    }
}

module.exports = new EmailController();