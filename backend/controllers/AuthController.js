const createError = require("http-errors");
const loginService = require("../services/LoginService");
const emailController = require("./EmailController");
const databaseController = require("./DatabaseController");
const registerService = require("../services/RegisterService");
const Auth = require("../models/Auth");

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
        let auth = new Auth();
        // auth.setEmail(email);
        auth.setId("22003229");

        this.getAuthUser(auth, (result) => {
            if (result instanceof Error) {
                return callback(result);
            }

            if (result.length === 0) {
                // User does not exist
                return callback({
                    completed: true
                });
            }

            let authUser = result[0];
            let id = authUser.getId();
            registerService.generateResetPasswordToken(email, id, (result) => {
                if (result instanceof Error) {
                    return callback(result);
                }

                // Send reset password email
                let token = result;
                emailController.sendResetPasswordEmail(email, token, (result) => {
                    if (result instanceof Error) {
                        return callback(result);
                    }

                    return callback({
                        completed: true
                    });
                });
            })
        })
    }

    getAuthUser(auth, callback) {
        databaseController.select(auth, (result) => {
            if (result instanceof Error) {
                return callback(result);
            }

            return callback(result);
        })
    }
}

module.exports = new AuthController();
