const express = require('express');
const createError = require("http-errors");
const router = express.Router();
const userController = require("../controllers/UserController")

class UserRouterHandler {
  /*
  - Update user email: POST /user/update (params: id & newEmail)
   */

  getRouter() {
    router.post('/update', (req, res, next) => {
      if (!req.session.user || req.session.user.type !== USER.ADMIN) {
        return next(createError(401));
      }

      // Check params
      if (!req.body.id || !req.body.newEmail) {
        return next(createError(400, "'id' or 'newEmail' param is missing"));
      }

      // Call controller
      let id = req.body.id;
      let newEmail = req.body.newEmail;
      userController.updateUserEmail(id, newEmail, (result) => {
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

module.exports = new UserRouterHandler();