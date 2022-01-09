//Router
const express = require('express');
const utilsController = require('./utilsController');

const router = express.Router();

router.route('/ping')
      .get([
            utilsController.ping
      ])

module.exports = router;