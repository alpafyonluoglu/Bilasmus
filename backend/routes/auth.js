const express = require('express');
const createError = require("http-errors");
const router = express.Router();

class AuthRouterHandler {
  getRouter() {
    router.post('/login', (req, res, next) => {
      // Check params
      if (!req.body.email || !req.body.password) {
        return next(createError(400, "'email' or 'password' param is missing"));
      }

      // TODO: Does not work currently, fix later
      return next(createError(500));

      // TODO: Validate params

      // TODO: Verify user
      // Dummy users
      let userID;
      let user = {
        name: "",
        email: ""
      }
      switch (req.body.email) {
        case "staff":
          userID = 1;
          break;
        case "outgoing":
          userID = 2;
          break;
        case "incoming":
          userID = 3;
          break;
        default:
          userID = 0;
      }

      if (userID === 0) {
        res.json({
          message: "Invalid params"
        });
      }
      else {
        req.session.regenerate( (err) => {
          req.session.userID = userID;
          res.json({
            message: "Already logged in"
          });
        });
      }
    })

    return router;
  }
}

module.exports = new AuthRouterHandler();