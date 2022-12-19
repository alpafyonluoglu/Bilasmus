const express = require('express');
const createError = require("http-errors");
const router = express.Router();
const Multer = require("multer");
const util = require("util");
const gcpFileStorageController = require("../controllers/GcpFileStorageController");
const fileStorageController = require("../controllers/FileStorageController");
const databaseController = require("../controllers/DatabaseController");
const Document = require("../models/Document");
const userController = require("../controllers/UserController");

class FileSystemRouter {
  /*
  - Upload: POST /file/upload (params: file & type)
  - Approve file: POST /file/approve (params: file & path)
  - Reject file: POST /file/reject (params: path)
  - Get current user's file of given type: GET /file/:type/:sign/this
  - Get specific user's file of given type: GET /file/:type/:sign/:userID
  - Get all files of given type: GET /file/:type/:sign/all
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
        if (!req.session || !req.session.userID) {
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
          let originalResult = result;
          let now = new Date();

          let doc = new Document();
          doc.setName(name).setOwnerId(req.session.userID).setPath(result.url).setType(type).setUploadDate(now).setSize(buffer.toString().length).setSigned(0);

          databaseController.insert(doc, (result) => {
            if (result instanceof Error) {
              return next(result);
            }

            originalResult.code = 200;
            return res.json(originalResult);
          });
        })
      }
      catch (error) {
        return next(createError(500, "File could not be uploaded"))
      }
    });

    router.post('/approve', async (req, res, next) => {
      try {
        if (!req.session || !req.session.userID) {
          return next(createError(401));
        }

        await this.processFile(req, res);

        // Check params
        if(!req.file || !req.body.path) {
          return next(createError(400, "'file' or 'path' param is missing"));
        }

        let name = req.file.originalname;
        let buffer = req.file.buffer;
        gcpFileStorageController.upload(name, buffer, (result) => {
          if (result instanceof Error) {
            return next(result);
          }

          // Add to DB
          let originalPath = req.body.path;
          let newPath = result.url;
          let newName = name;
          let size = buffer.toString().length;
          let now = new Date();
          let userType = req.session.type;
          fileStorageController.approve(originalPath, newPath, newName, size, now, userType, (result) => {
            if (result instanceof Error) {
              return next(result);
            }

            result.code = 200;
            return res.json(result);
          })
        })
      }
      catch (error) {
        return next(createError(500, "File could not be uploaded"))
      }
    });

    router.post('/reject', async (req, res, next) => {
      // Check session
      if (!req.session || !req.session.userID) {
        return next(createError(401));
      }

      // Check params
      if(!req.body.path) {
        return next(createError(400, "'path' param is missing"));
      }

      let path = req.body.path;
      fileStorageController.reject(path, (result => {
        if (result instanceof Error) {
          return next(result);
        }

        result.code = 200;
        return res.json(result);
      }));
    });

    router.get('/:type/:sign/all', (req, res, next) => {
      // Check session
      let allowedUserTypes = ["a", "fcb", "ds", "i", "iof", "c"];
      if (!req.session || !allowedUserTypes.includes(req.session.type)) {
        return next(createError(401));
      }

      // Check params
      if (!DOCUMENT.TYPES.includes(req.params.type)) {
        return next(createError(400, "Unknown document type"))
      }
      else if (!SIGN.TYPES.includes(req.params.sign)) {
        return next(createError(400, "Unknown sign type"))
      }

      // Call controller
      let documentType = req.params.type;
      let sign = req.params.sign;
      let userType = req.session.type;
      fileStorageController.getFiles(documentType, undefined, sign, userType, (result) => {
        if (result instanceof Error) {
          return next(result);
        }

        result.code = 200;
        return res.json(result);
      });
    });

    router.get('/:type/:sign/this', (req, res, next) => {
      // Check session
      if (!req.session || !req.session.userID) {
        return next(createError(401));
      }

      // Check params
      if (!DOCUMENT.TYPES.includes(req.params.type)) {
        return next(createError(400, "Unknown document type"))
      }
      else if (!SIGN.TYPES.includes(req.params.sign)) {
        return next(createError(400, "Unknown sign type"))
      }

      // Call controller
      let documentType = req.params.type;
      let sign = req.params.sign;
      let userType = req.session.type;
      let userId = req.session.userID;
      fileStorageController.getFiles(documentType, userId, sign, userType, (result) => {
        if (result instanceof Error) {
          return next(result);
        }

        result.code = 200;
        return res.json(result);
      });
    });

    router.get('/:type/:sign/:userID', (req, res, next) => {
      // Check session
      let allowedUserTypes = ["a", "fcb", "ds", "i", "iof", "c"];
      if (!req.session || !allowedUserTypes.includes(req.session.type)) {
        return next(createError(401));
      }

      // Check params
      if (!DOCUMENT.TYPES.includes(req.params.type)) {
        return next(createError(400, "Unknown document type"))
      }
      else if (!SIGN.TYPES.includes(req.params.sign)) {
        return next(createError(400, "Unknown sign type"))
      }

      // Call controller
      let documentType = req.params.type;
      let sign = req.params.sign;
      let userType = req.session.type;
      let userId = req.params.userID;
      fileStorageController.getFiles(documentType, userId, sign, userType, (result) => {
        if (result instanceof Error) {
          return next(result);
        }

        result.code = 200;
        return res.json(result);
      });
    });

    return router;
  }
}

module.exports = new FileSystemRouter();