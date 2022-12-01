const express = require("express"); // modulo express retorna uma funcao para a variavel 
const app = express();
const {engine} = require('express-handlebars')//constance recebe o modulo express handlebars
const bodyParser = require('body-parser')//Capta/recebe dados de formularios
const Post = require('./models/Post')
const Sequelize = require ('sequelize')

//templete engine // existem muitas templetes para o node 
app.engine('handlebars', engine ({defaultLayout: 'main'}))
app.set('view engine','handlebars')

//BODY PARSER - config
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) //JSON e basicamente um formato leve de troca de informacoes/dados entre sistemas. Mas JSON significa JavaScript Object Notation

//ROTAS - 
app.get('/', function(req, res){
    res.render('home')
})
app.get('/cad', function(req, res){
    res.render('formulario')// o expresse compreende que queremos renderizar o arquivo formulario do handlebars
})
//envia dados de formulario para o banco de dados 

app.post("/add", function(req, res){
    Post.create({
titulo: req.body.titulo,
conteudo: req.body.conteudo
}).then (function(){
    // res.send("Post criado com sucesso")
    res.redirect("/")
}).catch (function(erro){
   res.send("Houve um erro: " +erro)

})//informa se houve falha ou nao na crciacao do post 
})
app.listen(8090, function(){
    console.log("Servidor Rodando na url http:localhost:8090")
});

//nao conseguimos acessar uma rota do tipo postpela url. Da erro.
//So conseguiumos acessar pela url as do tipo get