var express = require("express");
var router = express.Router();
const revenuesController = require("../controllers/revenuesController");

router.get("/cadrevenues", revenuesController.cadRevenues);
router.post("/cadrevenues", revenuesController.salvar);
router.get("/:link?", revenuesController.detalhes);

module.exports = router;
