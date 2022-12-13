const createError = require("http-errors");
const loginService = require("../services/LoginService");

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
                callback(createError(500, "Session could not be generated."));
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
                callback(createError(500, "Session could not be destroyed."));
            }

            callback({
                loggedIn: false
            });
        });
    }

    resetPassword(email, callback) {
        // Sen reset password email
        loginService.resetPassword(email, callback);
    }
}

module.exports = new AuthController();