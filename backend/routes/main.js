const express = require('express');
const createError = require("http-errors");
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ user: req.session.userID });
})

router.get('/status', (req, res) => {
  res.json({ status: "Running" });
})

// TODO: Remove later, for testing
router.post('/hi', (req, res, next) => {
  if (!req.body.name) {
    return next(createError(400, "'name' param is missing"));
  }

  res.json({ message: "Hi " + req.body.name});
})

module.exports = router;
