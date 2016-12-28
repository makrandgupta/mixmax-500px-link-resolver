var express = require('express');
var router = express.Router();
var controller = require('./controller');
var cors = require('cors');

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

router.get('/', cors(corsOptions), controller.resolver);

module.exports = router;
