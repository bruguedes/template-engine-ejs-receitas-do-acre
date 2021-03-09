// const dadosReceita  = require('../bdTeste/dadosReceita')
const fs = require("fs");
const { join } = require("path");

//caminho para o arquivo .json
const filePath = join(__dirname, "/../bdTeste/", "receitas.json");

//função verifica se ja exite o arquivo.json
const getReceitas = () => {
  const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : [];

  try {
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};
//salva o novo dado e converte para .json
const saveReceitas = (receita) => {
  fs.writeFileSync(filePath, JSON.stringify(receita, null, "\t"));
};

const pesquisaPorId = (params) => {
  const receita = getReceitas();
  let resultado = receita.find((item) => item.link === params);
  return resultado;
};
const salvar = (body) => {
  const receita = getReceitas();
  let item = {
    id: receita.length + 1,
    prato: body.prato,
    caminhoImg: body.caminhoImg,
    link: body.prato.toLowerCase().replace(/\ /g, "-"),
    iframe: body.iframe,
    historia: body.historia,
    ingredientes: body.ingrediente.split("\r\n"),
    modo: body.modo.split("\r\n"),
  };

  receita.push(item);
  saveReceitas(receita);
};

module.exports = {
  pesquisaPorId,
  salvar,
};
