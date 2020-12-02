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
 * Alterar um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato:
 * {titulo: <string>, data: <string>, mensagem: <string>}
 * @param {int} id id do aviso
 * @returns {object} Mensagem de sucesso ou de erro
 */
function editar(aviso, id){
  return db('avisos').where('ID_avisos',id).update(aviso)
  .then(_ =>{
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
      corpo: "Erro: "+erro
    }
 })
}//fim se selecionarTodos

/**
 * Função que seleciona um aviso
 * @param {int} id id do aviso que sera selecionado
 * @returns {object} Objeto com o aviso selecionado
 */
function selecionarAviso(id){
  return db.select('*').from('avisos').where('ID_avisos',id).first()
  .then(aviso => {return aviso})
  .catch(erro=>{return {tipo: "erro", corpo: "Erro: "+erro}
 })
}//fim se selecionarAviso

/**
 * Função que exclui um aviso do banco de dados
 * @param {int} id id do aviso:
 */
function excluir(id){
 return db.del().from('avisos').where('ID_avisos',id)
}

module.exports = {salvar, selecionarTodos, excluir, selecionarAviso, editar}
