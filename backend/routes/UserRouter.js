const express = require('express');
const createError = require("http-errors");
const router = express.Router();
const userController = require("../controllers/UserController")
const dbController = require("../controllers/DatabaseController")

const PreApprovedCourse = require("../models/PreApprovedCourse");

class UserRouterHandler {
  /*
  - Add user: POST /user/add (params: name & surname & id & email & type)
  - Update user email: POST /user/:id/update (params: newEmail)
  - Delete user: DELETE /user/:id
  - Current user info: GET /user/this
   */

  getRouter() {
    router.get('/this', (req, res, next) => {
      if (!req.session.user) {
        return next(createError(401));
      }

      // Call controller
      let id = req.session.user.id;
      let type = req.session.user.type;

      userController.getCurrentUser(id, type, (result) => {
        if (result instanceof Error) {
          return next(result);
        }

        result.code = 200;
        return res.json(result);
      });
    })

    router.post('/add', (req, res, next) => {
      if (!req.session.user || req.session.user.type !== USER.ADMIN) {
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

    router.post('/:id/courseRequests', (req, res, next) => {
      if (!req.session.user || req.session.user.type !== USER.OUTGOING_STUDENT) {
        return next(createError(401));
      }

      // Check params
      if (!req.body.course_id || !req.body.course_name || ! req.body.course_link )
      {
        if(req.body.course_type.selected() === "Mandatory" || req.body.course_type.selected() === "Elective")
        {
            if(req.body.course_to_satisfy.selected === NULL)
            {
                return next(createError(400,"select a mandatory or elective course"));
            }

        }
        return next(createError(400, "'one of the parameters is missing "));
      }

      // Call controller
      let courseId = req.body.course_id;
      let courseName = req.body.course_name;
      let link = req.body.course_link;
      let type = req.body.course_type.selected;
      let courseToSatisfy = req.body.course_to_satisfy.selected;
      let ects = req.body.course_ects;
      let file = req.body.syllabus_choose;
      let pac = new PreApprovedCourse();
      pac.setHostUniversityCourseCode(courseId);
      pac.setHostUniversityCourseName(courseName);
      pac.setBilkentCourseCode(type);
      pac.setBilkentCourseName(courseToSatisfy);
      pac.setEcts(ects);
      pac.setSllyabusLink(file);
      dbController.insert(pac, (result) => {
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