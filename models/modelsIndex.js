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

module.exports = {
  getReceitas,
};
