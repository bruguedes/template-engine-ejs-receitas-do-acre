const modelsRevenues = require("../models/modelsRevenues");
const detalhes = (req, res) => {
  const { link } = req.params;
  let resultado = modelsRevenues.pesquisaPorId(link);
  return res.render("revenues", { resultado });
};

const cadRevenues = (req, res) => {
  return res.render("cadRevenues");
};

const salvar = (req, res) => {
  modelsRevenues.salvar(req.body);
  res.redirect("/");
};

module.exports = {
  detalhes,
  cadRevenues,
  salvar,
};
