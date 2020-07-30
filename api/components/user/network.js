const express = require('express');
const response = require('../../../network/response.js');
const router = express.Router();

router.route('/').get((req, res, next) => {
  response.success(req, res, "User API it's on");
});

module.exports = router;
