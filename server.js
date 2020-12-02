//importar o express
const express = require('express')
const bodyParser = require('body-parser')

//importando as rotas do avisos
const routerAvisos = require('./components/avisos/AvisosController')

//inicializando o express
const app = express();

//configurar a view engine
app.set('view engine','ejs')

//configurar a pasta public
app.use(express.static('public'))

//configurando o moment
app.locals.moment = require("moment")

//configurar o body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.use(routerAvisos)

//configuração da porta
app.listen(3000)
