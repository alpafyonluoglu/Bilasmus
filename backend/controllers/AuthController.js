const createError = require("http-errors");
const loginService = require("../services/LoginService");
const emailController = require("./EmailController");

class AuthController {
    createSession(email, password, req, callback) {
        // Verify password
        let result = loginService.verifyPassword();
        if (result !== true) {
            callback({
                loggedIn: false,
                message: "Email and password do not match"
            });
        }

        // Get user
        let userID = loginService.getUserId(email);
        if (userID === false) {
            callback(createError(400, "User not found"));
        }
        // TODO: Get user details (type)

        // Create session
        req.session.regenerate( (err) => {
            if (err) {
                callback(createError(500, "Session could not be generated: " + (process.env.PRODUCTION ? err : "...")));
            }

            req.session.userID = userID;
            callback({
                loggedIn: true,
                user: userID
            });
        });
    }

    destroySession(req, callback) {
        // Destroy session
        req.session.destroy( (err) => {
            if (err) {
                callback(createError(500, "Session could not be destroyed: " + (process.env.PRODUCTION ? err : "...")));
            }

            callback({
                loggedIn: false
            });
        });
    }

    resetPassword(email, callback) {
        // Sen reset password email
        emailController.sendResetPasswordEmail(email, callback);
    }
}

module.exports = new AuthController();