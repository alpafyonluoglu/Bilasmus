const express = require('express');
const createError = require("http-errors");
const router = express.Router();
const userController = require("../controllers/UserController")

class UserRouterHandler {
  /*
  - Update user email: POST /user/:id/update (params: id & newEmail)
  - Delete user: DELETE /user/:id
   */

  getRouter() {
    router.post('/:id/update', (req, res, next) => {
      if (!req.session.user || req.session.user.type !== USER.ADMIN) {
        return next(createError(401));
      }

      // Check params
      if (!req.body.newEmail) {
        return next(createError(400, "'newEmail' param is missing"));
      }

      // Call controller
      let id = req.params.id;
      let newEmail = req.body.newEmail;
      userController.updateUserEmail(id, newEmail, (result) => {
        if (result instanceof Error) {
          return next(result);
        }

        result.code = 200;
        return res.json(result);
      });
    })

    router.delete('/:id', (req, res, next) => {
      if (!req.session.user || req.session.user.type !== USER.ADMIN) {
        return next(createError(401));
      }

      // Call controller
      let id = req.params.id;
      userController.deleteUser(id, (result) => {
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