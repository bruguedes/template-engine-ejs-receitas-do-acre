var express = require('express');
const { receita } = require('../controllers/receitaController');
var router = express.Router();

const receitaController = require('../controllers/receitaController')


router.get('/baixaria', receitaController.baixaria);
router.get('/creme-cupuacu', receitaController.cremeCupuacu);
router.get('/pirarucu', receitaController.pirarucu);
router.get('/quibe', receitaController.quibe);

module.exports = router;