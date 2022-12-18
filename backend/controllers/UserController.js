const createError = require("http-errors");
const emailController = require("./EmailController");
const authController = require("./AuthController");
const userService = require("../services/UserService");
const registerService = require("../services/RegisterService");
const db = require("./DatabaseController");
const Admin = require("../models/Admin");
const Coordinator = require("../models/Coordinator");
const DepartmentSecretary = require("../models/DepartmentSecretary");
const FacultyCommitteeBoard = require("../models/FacultyCommitteeBoard");
const IncomingStudent = require("../models/IncomingStudent");
const OutgoingStudent = require("../models/OutgoingStudent");
const Instructor = require("../models/Instructor");
const InternationalStudentOffice = require("../models/InternationalStudentOffice");
const Auth = require("../models/Auth");

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

// Global variables
global.USER = {
    INCOMING_STUDENT: "ig",
    OUTGOING_STUDENT: "og",
    ADMIN: "a",
    FACULTY_COMMITTEE_BOARD: "fcb",
    DEPARTMENT_SECRETARY: "ds",
    INSTRUCTOR: "i",
    INTERNATIONAL_STUDENT_OFFICE: "iof",
    COORDINATOR: "c"
};

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

    updateUserEmail(id, email, callback) {
        let auth = new Auth();
        auth.setId(id);

        authController.getAuthUser(auth, (result) => {
            if (result instanceof Error) {
                return callback(result);
            }

            if (result.length === 0) {
                // User does not exist
                return callback(createError(500, "User could not be found"));
            }

            let authUser = result[0];
            this.getUser(id, authUser.getType(), (result) => {
                if (result instanceof Error) {
                    return callback(result);
                }

                let user = result;
                user.setEmail(email);

                // Write updated user back to DB
                db.update(user, (result) => {
                    if (result instanceof Error) {
                        return callback(result);
                    }

                    return {
                        completed: true
                    };
                })
            })
        })
    }

    getUser(id, type, callback) {
        // Select database to connect depending on user type
        let user;
        switch (type) {
            case USER.ADMIN:
                user = new Admin();
                break;
            case USER.COORDINATOR:
                user = new Coordinator();
                break;
            case USER.DEPARTMENT_SECRETARY:
                user = new DepartmentSecretary();
                break;
            case USER.FACULTY_COMMITTEE_BOARD:
                user = new FacultyCommitteeBoard();
                break;
            case USER.INCOMING_STUDENT:
                user = new IncomingStudent();
                break;
            case USER.INSTRUCTOR:
                user = new Instructor();
                break;
            case USER.INTERNATIONAL_STUDENT_OFFICE:
                user = new InternationalStudentOffice();
                break;
            default: // USER.OUTGOING_STUDENT
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