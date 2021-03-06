const dadosReceita  = require('../bdTeste/dadosReceita')

const pesquisaPorId = (params)=>{
    let resultado  = dadosReceita.find(item => item.link === params)
   
    return resultado
     
    } 
module.exports = {
    pesquisaPorId,
}