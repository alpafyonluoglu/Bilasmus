const express = require('express');
const createError = require("http-errors");
const router = express.Router();
const emailController = require("../controllers/EmailController");

class MainRouterHandler {
  /*
  - Status: GET /
   */

  getRouter() {
    router.get('/', (req, res) => {
      res.json({
        code: 200,
        testId: 1,
        status: {
          serverStatus: "Running",
          databaseStatus: dbConnected ? "Connected" : "Disconnected",
          sessionStatus: req.session && req.session.userID ? "Logged in" : "Uninitialized",
        },
        loggedIn: (req.session && req.session.userID) ? true : false,
        user: req.session && req.session.userID ? req.session.userID : undefined
      })
    })

    // TODO: Remove later, for testing
    router.post('/hi', (req, res, next) => {
      if (!req.body.name) {
        return next(createError(400, "'name' param is missing"));
      }

      res.json({ message: "Hi " + req.body.name});
    })

    // TODO: Remove later, for testing
    router.get('/test', (req, res, next) => {
      emailController.sendResetPasswordEmail("alpafyonluoglu@gmail.com", "TEST123", (result) => {
        res.json({ message: result});
      })
    })

    return router;
  }
}

module.exports = new MainRouterHandler();