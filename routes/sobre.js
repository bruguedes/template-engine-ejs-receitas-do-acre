var express = require('express');
var router = express.Router();
const sobreController = require('../controllers/sobreController')


/* GET home sobre. */

router.get('/', sobreController.sobre);

module.exports = router;
