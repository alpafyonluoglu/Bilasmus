const express = require('express');
const createError = require("http-errors");
const router = express.Router();
const userController = require("../controllers/UserController")
const dbController = require("../controllers/DatabaseController")
const PreApprovedCourse = require("../models/PreApprovedCourse");
const CourseWaitList = require("../models/CourseWaitList");

class UserRouterHandler {
  /*
  - Add user: POST /user/add (params: name & surname & id & email & type)
  - Update user email: POST /user/:id/update (params: newEmail)
  - Delete user: DELETE /user/:id
  - Current user info: GET /user/this
   */

  getRouter() {
    router.get('/this', (req, res, next) => {
      if (!req.session || !req.session.userID) {
        return next(createError(401));
      }

      // Call controller
      let id = req.session.userID;
      let type = req.session.type;

      userController.getCurrentUser(id, type, (result) => {
        if (result instanceof Error) {
          return next(result);
        }

        result.code = 200;
        return res.json(result);
      });
    })

    router.post('/add', (req, res, next) => {
      if (!req.session || req.session.type !== USER.ADMIN) {
        return next(createError(401));
      }

      // Check params
      if (!req.body.name || !req.body.surname || !req.body.id || !req.body.email || !req.body.type) {
        return next(createError(400, "'name', 'surname', 'id', 'email', or 'type' param is missing"));
      }
      else if (!USER.TYPES.includes(req.body.type)) {
        return next(createError(400, "Unknown 'type'"));
      }

      // Call controller
      let name = req.body.name;
      let surname = req.body.surname;
      let id = req.body.id;
      let email = req.body.email;
      let type = req.body.type;
      userController.registerUser(id, name, surname, email, type, (result) => {
        if (result instanceof Error) {
          return next(result);
        }

        result.code = 200;
        return res.json(result);
      });
    })

    router.post('/:id/update', (req, res, next) => {
      if (!req.session || req.session.type !== USER.ADMIN) {
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
      if (!req.session || req.session.type !== USER.ADMIN) {
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

    router.post('/:id/addCourseRequests', (req, res, next) => {
      if (!req.session || req.session.type !== USER.OUTGOING_STUDENT)
      {
        return next(createError(401));
      }

      // Call controller
      const Docstra = new DocumentStrategy();
      const coordinatorStrategy =new DocumentStrategy(cs);
      Docstra.addStrategy(coordinatorStrategy);
      let cwl = coordinatorStrategy.approve();
      dbController.update(cwl, (result) => {
        if (result instanceof Error) {
          return next(result);
        }

        result.code = 200;
        return res.json(result);
      });
    })

    router.post("/:id/approvePreApprovalForm",(req,res,next) => {
      if (!req.session || req.session.type !== USER.COORDINATOR)
      {
        return next(createError(401));
      }
    })

    return router;
  }
}

module.exports = new UserRouterHandler();