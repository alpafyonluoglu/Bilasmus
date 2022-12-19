const createError = require("http-errors");
const { format } = require("util");
const { Storage } = require("@google-cloud/storage");
const Document = require("../models/Document");
const Auth = require("../models/Auth");
const db = require("./DatabaseController");
const userController = require("./UserController");
const Admin = require("../models/Admin");
const Coordinator = require("../models/Coordinator");
const DepartmentSecretary = require("../models/DepartmentSecretary");
const FacultyCommitteeBoard = require("../models/FacultyCommitteeBoard");
const IncomingStudent = require("../models/IncomingStudent");
const Instructor = require("../models/Instructor");
const InternationalStudentOffice = require("../models/InternationalStudentOffice");
const OutgoingStudent = require("../models/OutgoingStudent");

/*
Sign types:
- unsigned
- signed
- all
 */

/*
Sign levels:
- -1: Rejected
- 0: Unsigned
- 1: Signed by student
- 2: Signed by coordinator
- 3: Signed by instructor
- 4: Signed by department secretary
- 5: Signed by international student office
- 6: Signed by committee board
- 7: Signed
 */

// Global variables
global.SIGN = {
    TYPES: ["unsigned", "signed", "all"],
    UNSIGNED: "unsigned",
    SIGNED: "signed",
    ALL: "all"
};

global.SIGN_LEVEL = {
    REJECTED: -1,
    UNSIGNED: 0,
    SIGNED_BY_STUDENT: 1,
    SIGNED_BY_COORDINATOR: 2,
    SIGNED_BY_INSTRUCTOR: 3,
    SIGNED_BY_DEPARTMENT_SECRETARY: 4,
    SIGNED_BY_INTERNATIONAL_STUDENT_OFFICE: 5,
    SIGNED_BY_COMMITTEE_BOARD: 6,
    SIGNED: 7,
};

class FileStorageController {
    getFiles(type, ownerId, sign, userType, callback) {
        let docSelector = new Document();
        docSelector.setType(type);
        if (ownerId) {
            docSelector.setOwnerId(ownerId);
        }

        // Select files from database
        db.select(docSelector, (result) => {
            if (result instanceof Error) {
                return callback(result);
            }

            let filesInfo = [];

            let signedLevel = this.#getSignedLevel(userType, type);
            result.forEach((document) => {
                let fileInfo = {
                    name: document.getName(),
                    ownerId: document.getOwnerId(),
                    uploadDate: document.getUploadDate(),
                    size: document.getSize(),
                    url: document.getPath()
                }

                if ((sign === SIGN.SIGNED && document.getSigned() > signedLevel)
                    || (sign === SIGN.UNSIGNED && document.getSigned() === signedLevel)
                    || (sign === SIGN.ALL)) {
                    filesInfo.push(fileInfo);
                }
            })

            return this.addUserInfoToFiles(filesInfo, [], callback);
        });
    }

    #getSignedLevel(userType, docType) {
        // Document is unsigned if its signed level is equal to the returned value
        // Document is signed if its signed level is higher than the returned value
        let signedLevel;
        switch (userType) {
            case USER.ADMIN:
                signedLevel = SIGN_LEVEL.UNSIGNED;
                break;
            case USER.COORDINATOR:
                signedLevel = SIGN_LEVEL.SIGNED_BY_STUDENT;
                break;
            case USER.DEPARTMENT_SECRETARY:
                signedLevel = SIGN_LEVEL.UNSIGNED;
                break;
            case USER.FACULTY_COMMITTEE_BOARD:
                signedLevel = SIGN_LEVEL.SIGNED_BY_COORDINATOR;
                break;
            case USER.INCOMING_STUDENT:
                signedLevel = SIGN_LEVEL.UNSIGNED;
                break;
            case USER.INSTRUCTOR:
                signedLevel = SIGN_LEVEL.UNSIGNED;
                break;
            case USER.INTERNATIONAL_STUDENT_OFFICE:
                signedLevel = SIGN_LEVEL.SIGNED_BY_STUDENT;
                break;
            default: // USER.OUTGOING_STUDENT
                signedLevel = SIGN_LEVEL.UNSIGNED;
                break;
        }
        return signedLevel;
    }

    addUserInfoToFiles(filesInfo, modifiedFilesInfo, callback) {
        if (filesInfo.length === 0) {
            return callback(modifiedFilesInfo);
        }
        else {
            let document = filesInfo[0];
            let userId = document.ownerId;

            let authUser = new Auth();
            authUser.setId(userId);

            db.select(authUser, (result) => {
                if (result instanceof Error) {
                    return callback(result);
                }

                let type = result[0].getType();
                let user = userController.createUserModel(type);
                user.setId(userId);

                db.select(user, (result) => {
                    if (result instanceof Error) {
                        return callback(result);
                    }

                    let name = result[0].getName();

                    document.userName = name;
                    modifiedFilesInfo.push(document);
                    filesInfo.shift();

                    return this.addUserInfoToFiles(filesInfo, modifiedFilesInfo, callback)
                })
            })
        }
    }

    reject(path, callback) {
        let doc = new Document();
        doc.setPath(path);

        db.select(doc, (result) => {
            if (result instanceof Error) {
                return callback(result);
            }

            if (result.length === 0) {
                return callback({
                    completed: false,
                    message: "File does not exist"
                })
            }

            let selectedDoc = result[0];
            selectedDoc.setSigned(-1);

            db.update(selectedDoc, (result) => {
                if (result instanceof Error) {
                    return callback(result);
                }

                return callback({
                    completed: true
                })
            });

        });
    }

    approve(originalPath, newPath, newName, size, now, userType, callback) {
        let doc = new Document();
        doc.setPath(originalPath);

        db.select(doc, (result) => {
            if (result instanceof Error) {
                return callback(result);
            }

            if (result.length === 0) {
                return callback({
                    completed: false,
                    message: "File does not exist"
                })
            }

            let selectedDoc = result[0];
            selectedDoc.setPath(newPath).setName(newName).setSize(size).setUploadDate(now)
                .setSigned(this.#getSignedLevelForCurrentUser(userType));

            db.insert(selectedDoc, (result) => {
                if (result instanceof Error) {
                    return callback(result);
                }

                db.delete(doc, (result) => {
                    if (result instanceof Error) {
                        return callback(result);
                    }

                    return callback({
                        completed: true
                    })
                });
            });

        });
    }

    #getSignedLevelForCurrentUser(userType) {
        // Document is unsigned if its signed level is equal to the returned value
        // Document is signed if its signed level is higher than the returned value
        let signedLevel;
        switch (userType) {
            case USER.ADMIN:
                signedLevel = SIGN_LEVEL.SIGNED;
                break;
            case USER.COORDINATOR:
                signedLevel = SIGN_LEVEL.SIGNED_BY_COORDINATOR;
                break;
            case USER.DEPARTMENT_SECRETARY:
                signedLevel = SIGN_LEVEL.SIGNED_BY_DEPARTMENT_SECRETARY;
                break;
            case USER.FACULTY_COMMITTEE_BOARD:
                signedLevel = SIGN_LEVEL.SIGNED_BY_COMMITTEE_BOARD;
                break;
            case USER.INCOMING_STUDENT:
                signedLevel = SIGN_LEVEL.SIGNED_BY_STUDENT;
                break;
            case USER.INSTRUCTOR:
                signedLevel = SIGN_LEVEL.SIGNED_BY_INSTRUCTOR;
                break;
            case USER.INTERNATIONAL_STUDENT_OFFICE:
                signedLevel = SIGN_LEVEL.SIGNED_BY_INTERNATIONAL_STUDENT_OFFICE;
                break;
            default: // USER.OUTGOING_STUDENT
                signedLevel = SIGN_LEVEL.SIGNED_BY_STUDENT;
                break;
        }
        return signedLevel;
    }
}

module.exports = new FileStorageController();