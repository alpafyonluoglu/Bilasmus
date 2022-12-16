const createError = require("http-errors");
const { format } = require("util");
const { Storage } = require("@google-cloud/storage");

class GcpFileStorageController {
    bucket;

    constructor() {
        let storage = new Storage({
            projectId: process.env.GCLOUD_PROJECT,
            keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
        });
        this.bucket = storage.bucket("bilasmus.appspot.com");
    }

    upload(name, buffer, callback) {
        const blob = this.bucket.file(name);
        const blobStream = blob.createWriteStream({
            resumable: false,
        });

        blobStream.on("error", (err) => {
            return callback(createError(500, err.message));
        });

        blobStream.on("finish", async (data) => {
            const publicUrl = format("https://storage.googleapis.com/" + this.bucket.name + "/" + blob.name);

            try {
                // Make the file public
                await this.bucket.file(name).makePublic();
            } catch {
                return callback(createError(500, "File could not be made public."));
            }

            return callback({
                fileName: name,
                url: publicUrl,
            });
        });

        blobStream.end(buffer);
    }
}

module.exports = new GcpFileStorageController();