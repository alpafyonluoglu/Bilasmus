const express = require('express');
const createError = require("http-errors");
const router = express.Router();

class MainRouterHandler {
  /*
  - Status: GET /
   */

  getRouter() {
    router.get('/', (req, res) => {
      res.json({
        code: 200,
        status: {
          serverStatus: "Running",
          sessionStatus: req.session && req.session.userID ? "Logged in" : "Uninitialized",
        },
        loggedIn: req.session && req.session.userID,
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
    router.get('/db', (req, res) => {
      const postgres = require("../controllers/DatabaseController");

      res.json({ message: "OK"});
    })

    return router;
  }
}

module.exports = new MainRouterHandler();