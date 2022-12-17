const createError = require("http-errors");
const emailController = require("./EmailController");
const userService = require("../services/UserService");
const registerService = require("../services/RegisterService");
const db = require("./DatabaseController");
const Admin = require("../models/Admin");
const Coordinator = require("../models/Coordinator");
const DepartmentSecretary = require("../models/DepartmentSecretary");
const FacultyCommitteeBoard = require("../models/FacultyCommitteeBoard");
const IncomingStudent = require("../models/IncomingStudent");
const OutgoingStudent = require("../models/OutgoingStudent");
const InternationalStudentOffice = require("../models/InternationalStudentOffice");

/*
User types:
- ig: Incoming Student
- og: Outgoing Student
- a: Admin
- fcb: Faculty Committee Board
- ds: Department Secretary
- i: Instructor
- iof:  International Student Office
- c: Coordinator
 */

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

    getUser(id, type, callback) {
        // Select database to connect depending on user type
        let user;
        switch (type) {
            case "a":
                user = new Admin();
                break;
            case "c":
                user = new Coordinator();
                break;
            case "ds":
                user = new DepartmentSecretary();
                break;
            case "fcb":
                user = new FacultyCommitteeBoard();
                break;
            case "ig":
                user = new IncomingStudent();
                break;
            case "iof":
                user = new InternationalStudentOffice();
                break;
            default: // "og"
                user = new OutgoingStudent();
                break;
        }

        user.setId(id);

        db.select(user, (result) => {
            if (result instanceof Error) {
                return callback(result);
            }

            return result;
        })
    }
}

module.exports = new UserController();