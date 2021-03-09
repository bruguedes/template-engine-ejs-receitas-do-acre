let modalIndex = require("../models/modelsIndex");
const index = (req, res) => {
  let dadosReceita = modalIndex.getReceitas();
  return res.render("index", { receitas: dadosReceita });
};

module.exports = { index };
