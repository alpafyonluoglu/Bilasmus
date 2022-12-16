const express = require('express');
const router = express.Router();
const databaseController = require("../controllers/DatabaseController");

class DatabaseRouterHandler {
  /*
  - Connect: POST /db/connect
   */

  getRouter() {
    router.post('/connect', (req, res, next) => {
      // Call controller
      databaseController.connect((result) => {
        if (result instanceof Error) {
          return next(result);
        }

        result.code = 200;
        return res.json(result);
      });
    })

    return router;
  }
}

module.exports = new DatabaseRouterHandler();