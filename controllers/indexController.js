let dadosReceita  = require('../bdTeste/dadosReceita')
const index= (req, res)=>{
      return res.render('index', {receitas: dadosReceita})
    }    



module.exports = {index};