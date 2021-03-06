const modelsReceita = require('../models/modelsReceita')
const detalhes = (req, res)=>{
    const {link} = req.params
    let resultado = modelsReceita.pesquisaPorId(link)
    return res.render('newRevenues',{resultado})
  }

  module.exports = {
      detalhes
  }