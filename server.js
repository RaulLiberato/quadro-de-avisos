//importar o express
const express = require('express')
const bosyParser = require('body-parser')

//importando as rotas do avisos
const rauterAvisos = require('./components/avisos/AvisosController')

//inicializando o express
const app = express();

//configurar a view engine
app.set('view engine','ejs')

//configurar a pasta public
app.use(express.static('public'))

//configurar o body-parser
app.use(bosyParser.urlencoded({extended:false}))
app.use(bosyParser.jason())

//rotas
app.use(routerAvisos)

//configuração da porta
app.listen(3000)
