
const  baixaria = (req, res)=>{
      // let {link} = req.params
      // let detalheReceita = modelsReceita.pesquisaPorlink(link, arrayReceitas)
      return res.render('./revenues/baixaria')
    }
    const  cremeCupuacu = (req, res)=>{
      
      return res.render('./revenues/creme-cupuacu')
    }   
    const  pirarucu = (req, res)=>{
      
      return res.render('./revenues/pirarucu')
    }
    const  quibe = (req, res)=>{
     
      return res.render('./revenues/quibe')
    } 
   



module.exports = {
  baixaria,
  cremeCupuacu,
  pirarucu,
  quibe,
 
};