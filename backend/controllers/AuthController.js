const createError = require("http-errors");
const loginService = require("../services/LoginService");
const emailController = require("./EmailController");
const databaseController = require("./DatabaseController");
const registerService = require("../services/RegisterService");
const Auth = require("../models/Auth");
const Session = require("../models/Session");

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
                    let sessionID = registerService.generateToken(32);
                    let session = new Session();
                    session.setSessionID(sessionID).setUserID(userID).setType(userType);
                    databaseController.insert(session, (result) => {
                        if (result instanceof Error) {
                            return callback(result);
                        }

                        let user = {
                            id: userID,
                            type: userType
                        };
                        return callback({
                            loggedIn: true,
                            sessionID: sessionID,
                            user: user
                        });
                    })
                });
            });
        });
    }

    destroySession(req, callback) {
        // Destroy session
        let session = new Session();
        session.setSessionID(req.session.sessionID);

        db.delete(session, (result) => {
            if (result instanceof Error) {
                return callback(result);
            }

            return callback({
                loggedIn: false
            });
        })
    }

    resetPassword(email, callback) {
        let auth = new Auth();
        auth.setEmail(email);

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
            registerService.generateAccessToken(email, id, (result) => {
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

    setPassword(password, token, callback) {
        let auth = new Auth();
        auth.setEmailToken(token)

        // Check token
        databaseController.select(auth, (result) => {
            if (result instanceof Error) {
                return callback(result);
            }

            if (result.length === 0) {
                return callback({
                    completed: false,
                    message: "Invalid token"
                })
            }

            let authUser = result[0];
            authUser.setPassword(password).setEmailToken(null);

            // Save new password to DB and expire token
            databaseController.update(authUser, (result) => {
                if (result instanceof Error) {
                    return callback(result);
                }

                return callback({
                    completed: true
                })
            });
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
