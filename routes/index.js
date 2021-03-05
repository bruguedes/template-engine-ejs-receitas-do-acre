var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')
// const sobreController = require('../controllers/sobreController')
// const receitaController = require('../controllers/receitaController')

/* GET home page. */
router.get('/', indexController.index);

// router.get('/baixaria', receitaController.receita);
module.exports = router;
