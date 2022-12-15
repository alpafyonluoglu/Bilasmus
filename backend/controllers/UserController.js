const createError = require("http-errors");
const emailController = require("./EmailController");
const userService = require("../services/UserService");
const registerService = require("../services/RegisterService");

class UserController {
    registerUser(id, name, email, callback) {
        // TODO: Create user instance
        userService.addUser();

        registerService.generateRegistrationToken(email, (result) => {
            if (result instanceof Error) {
                return callback(result);
            }

            // Send welcome email
            emailController.sendWelcomeEmail( email, result, (result) => {
                if (result instanceof Error) {
                    return callback(result);
                }

                return callback({
                    message: "User registered"
                })
            })
        })
    }

    updateUser(user, callback) { // TODO: Input params
        // TODO: DB connection

    }
}

module.exports = new UserController();