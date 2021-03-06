var express = require('express');
var router = express.Router();
const revenuesController = require('../controllers/revenuesController')

router.get('/:link?', revenuesController.detalhes);

module.exports = router;