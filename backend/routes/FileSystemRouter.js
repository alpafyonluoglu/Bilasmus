const express = require('express');
const createError = require("http-errors");
const router = express.Router();
const Multer = require("multer");
const util = require("util");
const gcpFileStorageController = require("../controllers/GcpFileStorageController");
const databaseController = require("../controllers/DatabaseController");
const Document = require("../models/Document");

class FileSystemRouter {
  /*
  - Upload: POST /file/upload (params: file, type)
   */
  processFile;

  constructor() {
    let multer = Multer({
      storage: Multer.memoryStorage(),
      limits: {
        fileSize: 32 * 1024 * 1024, // Max 32MB
      }
    });
    let multerFile = multer.single("file");
    this.processFile = util.promisify(multerFile);
  }

  getRouter() {
    router.post('/upload', async (req, res, next) => {
      try {
        if (!req.session.user) {
          return next(createError(401));
        }

        await this.processFile(req, res);

        // Check params
        if(!req.file || !req.body.type) {
          return next(createError(400, "'file' or 'type' param is missing"));
        }

        let name = req.file.originalname;
        let type = req.body.type;
        let buffer = req.file.buffer;
        gcpFileStorageController.upload(name, buffer, (result) => {
          if (result instanceof Error) {
            return next(result);
          }

          // Add to DB
          let now = new Date();

          let doc = new Document();
          doc.setName(name).setOwnerId(req.session.user.id).setPath(result.url).setType(type).setUploadDate(now).setSize(buffer.toString().length);

          databaseController.insert(doc, (result) => {
            if (result instanceof Error) {
              return next(result);
            }

            return res.json({
              code: 200,
              uploaded: true
            });
          });
        })
      }
      catch (error) {
        return next(createError(500, "File could not be uploaded"))
      }
    });

    return router;
  }
}

module.exports = new FileSystemRouter();