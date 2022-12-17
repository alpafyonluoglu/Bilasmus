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

    // TODO: For testing, remove later
    router.get('/test', (req, res, next) => {
      // Call controller
      const Auth = require("../models/Auth");
      let auth = new Auth();
      auth.setEmail("emre.karatas@ug.bilkent.edu.tr").setPassword("abi");

      databaseController.get(auth, (result) => {
        if (result instanceof Error) {
          return next(result);
        }

        console.log("OK");
        console.log(result.length);
        console.log(result[0].getEmail());

        result.code = 200;
        return res.json(result);
      });
    })

    return router;
  }
}

module.exports = new DatabaseRouterHandler();