const createError = require("http-errors");
const loginService = require("../services/LoginService");
const emailController = require("./EmailController");

class AuthController {
    createSession(email, password, req, callback) {
        // Verify password
        loginService.verifyPassword(email, password, (result) => {
            if (result instanceof Error) {
                return callback(result);
            } else if (result !== true) {
                return callback({
                    loggedIn: false,
                    message: "Email and password do not match"
                });
            }

            // Get user
            loginService.getUserId(email, (result) => {
                if (result instanceof Error) {
                    return callback(result);
                }

                let userID = result.userID;
                // Get user
                loginService.getType(userID, (result) => {
                    if (result instanceof Error) {
                        return callback(result);
                    }

                    let userType = result.userType;
                    // Create session
                    req.session.regenerate((err) => {
                        if (err) {
                            callback(createError(500, "Session could not be generated: " + (process.env.PRODUCTION ? err : "...")));
                        }

                        let user = {
                            id: userID,
                            type: userType
                        };

                        req.session.user = user;
                        callback({
                            loggedIn: true,
                            user: user
                        });
                    });
                });
            });
        });
    }

    destroySession(req, callback) {
        // Destroy session
        req.session.destroy((err) => {
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
