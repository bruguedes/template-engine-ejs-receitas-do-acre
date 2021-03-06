const modelsRevenues = require('../models/modelsRevenues')
const detalhes = (req, res)=>{
    const {link} = req.params
    let resultado = modelsRevenues.pesquisaPorId(link)
    return res.render('revenues',{resultado})
  }

  module.exports = {
      detalhes
  }