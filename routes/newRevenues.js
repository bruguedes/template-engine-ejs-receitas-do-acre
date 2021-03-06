var express = require('express');
var router = express.Router();
const newRevenuesController = require('../controllers/newRevenues')

router.get('/:link?', newRevenuesController.detalhes);

module.exports = router;