const createError = require("http-errors");
const { format } = require("util");
const { Storage } = require("@google-cloud/storage");
const Document = require("../models/Document");
const Auth = require("../models/Auth");
const db = require("./DatabaseController");
const userController = require("./UserController");

class FileStorageController {
    getFiles(type, ownerId, callback) {
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

            result.forEach((document) => {
                let fileInfo = {
                    name: document.getName(),
                    ownerId: document.getOwnerId(),
                    uploadDate: document.getUploadDate(),
                    size: document.getSize(),
                    url: document.getPath()
                }

                filesInfo.push(fileInfo);
            })

            return this.addUserInfoToFiles(filesInfo, [], callback);
        });
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
}

module.exports = new FileStorageController();