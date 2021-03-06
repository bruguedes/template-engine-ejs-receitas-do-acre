let dadosReceita  = require('../bdTeste/dadosReceita')

const index= (req, res)=>{
  
  // let receita = dadosReceita.filter(item => (item.id-1)<= dadosReceita.length) testes de loop
 
      return res.render('index', {receitas: dadosReceita})
    }    



module.exports = {index};