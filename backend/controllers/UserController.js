const createError = require("http-errors");
const emailController = require("./EmailController");
const userService = require("../services/UserService");
const registerService = require("../services/RegisterService");

class UserController {
    registerUser(id, name,surname, email,type, callback) {
        // TODO: Create user instance
        userService.addUser(id,email);

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