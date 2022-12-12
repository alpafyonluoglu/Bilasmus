const express = require('express');
const createError = require("http-errors");
const router = express.Router();

class AuthRouterHandler {
  /*
  - Login: POST /auth/login (params: email & password)
  - Logout: POST /auth/logout
   */

  getRouter() {
    router.post('/login', (req, res, next) => {
      // Check params
      if (!req.body.email || !req.body.password) {
        return next(createError(400, "'email' or 'password' param is missing"));
      }

      // TODO: Validate params

      // TODO: Verify user
      // Dummy users
      let userID;
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
        return next(createError(400, "Invalid dummy email"))
      }
      else {
        req.session.regenerate( (err) => {
          if (err) {
            createError(500, "Session could not be generated.")
          }
          req.session.userID = userID;

          res.json({
            code: 200,
            message: "Logged in",
            user: userID
          });
        });
      }
    })

    router.post('/logout', (req, res) => {
      req.session.destroy( (err) => {
        if (err) {
          createError(500, "Session could not be destroyed.")
        }

        res.json({
          code: 200,
          message: "Logged out"
        });
      });
    })

    return router;
  }
}

module.exports = new AuthRouterHandler();