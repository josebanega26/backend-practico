const express = require('express');
const response = require('../../../network/response.js');
const controller = require('./controller');
const router = express.Router();

router.route('/').get((req, res, next) => {
  const lista = controller.list();
  response.success(req, res, lista, 200);
});

module.exports = router;
