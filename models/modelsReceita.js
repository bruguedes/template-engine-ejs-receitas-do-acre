const receita = require("../controllers/receitaController")

const pesquisaPorlink = (link,array)=>{
    
    return array.filter(item => item.link === link)
     
    } 
module.exports = {
    pesquisaPorlink,
}