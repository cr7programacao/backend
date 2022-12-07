const express = require("express")
const app = express();
const {engine} = require('express-handlebars')
const bodyPArser = require('body-parser')
const moment = require('moment')
const Post = require('./models/Post')
const Sequelize = require('sequelize')

//templete engine
 app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
},
 helpers: {
     formatDate: (date) =>{
         return moment(date).format('DD/MM/YYYY');
     }
   }
 }))
   app.set('view engine','handlebars')

   //BODY PARSER - conf 
   app.use(bodyParser.urlencoded({extended: false}))
   app.use(bodyParser.json())//JSON eh basicamente um formato leve de troca de informacoes/dados entre sistemas. Mas JSON significa JavaScript Object Notation

   //conexao com o banco de dados Mysql
   const sequelize = new Sequelize ('Postapp', 'root', 'admin', {
    host: "localhost",
    dialect: "mysql"
   })

//ROTAS - 

app.get('/', function(req, res){
  Post.findAll({order:[['id', 'ASC']]}).then(function(posts){//Quero passar posts para view home
  res.render('home',{posts:posts})
  })
  //ASC do antigo para o mais recente 
  //DESC do recente para o antigo   
})

app.get('/cad', function(req, res){
    res.render('formulario')// o express compreende que queremos renderizar o arquivo do handlebars

})
//recebe dados de formulario 
  app.post('/add', function(req, res){
    Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
        //res.send("Post criado com sucesso")
    }).catch(function(erro){
        res.send("Houve um erro: " +erro)

    })//Informa se houve falha ou nao na criacao do post 

  })

  app.listenerCount(8093, function(){
      console.log("Servidor Rodando na url http:localhost:8093")
  });