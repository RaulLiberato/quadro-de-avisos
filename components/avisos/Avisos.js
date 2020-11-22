//Conexão como bacno de dados
const db = require('../../knexfile.js')

/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato:
 * {titulo: <string>, data: <string>, mensagem: <string>}
 * @returns {object} Mensagem de sucesso ou de erro
 */
function salvar(aviso){
  //insert
  db.insert(aviso).into('avisos').then(_ =>{
    return{
      tipo: "sucesso",
      corpo: "Dados inseridos com sucesso!"
    }
})
 .catch(erro=>{
   return{
     tipo: "erro",
     corpo: "Erro ao cadastrar o aviso"+erro
   }
})
}//fim do salvar

/**
 * @return {object} Objeto com todos os avisos cadastrados ou uma mensagem de erro
 */
function selecionarTodos(){
  return db.select("*").from("avisos")
  .then(avisos =>{
    return avisos
  })
  .catch(erro=>{
    return{
      tipo: "erro",
      corpo: "Erro ao cadastrar o aviso"+erro
    }
 })
}//fim se selecionarTodos

module.exports = {salvar, selecionarTodos}
