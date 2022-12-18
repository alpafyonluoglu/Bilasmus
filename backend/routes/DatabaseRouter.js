const express = require('express');
const router = express.Router();
const databaseController = require("../controllers/DatabaseController");
const OutgoingStudent = require("../models/OutgoingStudent");
const Auth = require("../models/Auth");

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
      // const OutgoingStudent = require("../models/OutgoingStudent");
      // let user = new OutgoingStudent();
      // user.setId("22003229").setName("Alp").setSurname("Afyonluoglu").setTotalPoint("0").setEmail("alpafyonluoglu@gmail.com");

      const Auth = require("../models/Auth");

      let authUser = new Auth();
      authUser.setId("22003229");

      databaseController.update(authUser, (result) => {
        if (result instanceof Error) {
          return next(result);
        }

        result[0].getEmail();

        return res.json(result);
      });
    })

    return router;
  }
}

module.exports = new DatabaseRouterHandler();