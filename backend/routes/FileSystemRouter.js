const express = require('express');
const createError = require("http-errors");
const router = express.Router();
const Multer = require("multer");
const util = require("util");
const gcpFileStorageController = require("../controllers/GcpFileStorageController");

class FileSystemRouter {
  /*
  - Upload: POST /file/upload (params: file)
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
        await this.processFile(req, res);

        // Check params
        if(!req.file) {
          return next(createError(400, "'file' param is missing"));
        }

        gcpFileStorageController.upload(req.file.originalname, req.file.buffer, (result) => {
          if (result instanceof Error) {
            return next(result);
          }

          result.code = 200;
          return res.json(result);
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