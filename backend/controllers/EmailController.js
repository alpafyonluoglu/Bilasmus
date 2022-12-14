const mailer = require( 'nodemailer');
const createError = require("http-errors");

class EmailController {
    sendResetPasswordEmail(email, callback) {
        let subject = "Reset your password";
        let content = "..."; // TODO: Add content

        // TODO: Get user name
        // TODO: Create link with token

        this.#sendEmail(email, subject, content, callback);
    }

    sendWelcomeEmail(email, token, callback) {
        let subject = "Welcome to Bilasmus!";
        let content = "..."; // TODO: Add content

        // TODO: Get user name
        // TODO: Create link with token

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
        let transporter = mailer.createTransport( {
            host: 'smtp.gmail.com',
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