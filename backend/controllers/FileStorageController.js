const createError = require("http-errors");
const { format } = require("util");
const { Storage } = require("@google-cloud/storage");
const Document = require("../models/Document");
const db = require("./DatabaseController");

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

            return callback(filesInfo);
        });
    }
}

module.exports = new FileStorageController();