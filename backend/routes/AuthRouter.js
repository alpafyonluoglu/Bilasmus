const express = require('express');
const createError = require("http-errors");
const router = express.Router();
const authController = require("../controllers/AuthController");

class AuthRouterHandler {
  /*
  - Login: POST /auth/login (params: email & password)
  - Logout: POST /auth/logout
  - Reset: POST /auth/reset (params: email)
   */

  getRouter() {
    router.post('/login', (req, res, next) => {
      // Check params
      if (!req.body.email || !req.body.password) {
        return next(createError(400, "'email' or 'password' param is missing"));
      }

      // Call controller
      authController.createSession(req.body.email, req.body.password, req, (result) => {
        if (result instanceof Error) {
          return next(result);
        }

        result.code = 200;
        return res.json(result);
      });
    })

    router.post('/logout', (req, res, next) => {
      // Call controller
      authController.destroySession(req, (result) => {
        if (result instanceof Error) {
          return next(result);
        }

        result.code = 200;
        return res.json(result);
      });
    })

    router.post('/reset', (req, res, next) => {
      // Check params
      if (!req.body.email) {
        return next(createError(400, "'email' param is missing"));
      }

      let email = req.body.email;
      // Call controller
      authController.resetPassword(email, (result) => {
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

module.exports = new AuthRouterHandler();