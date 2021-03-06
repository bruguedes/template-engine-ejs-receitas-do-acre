var express = require('express');
var router = express.Router();
const receitaController = require('../controllers/receitaController')


router.get('/baixaria', receitaController.baixaria);
router.get('/creme-cupuacu', receitaController.cremeCupuacu);
router.get('/pirarucu', receitaController.pirarucu);
router.get('/quibe', receitaController.quibe);
// router.get('/:id', receitaController.detalhes);

module.exports = router;