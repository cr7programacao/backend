const express = require("express"); 
const app = express();
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
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
         return moment(date).format('DD/MM/YYY');
      }
    }
}))
app.set('view engine', 'handlebars')

//BODY PARSER - config
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())//JSON é basicamente um formato de troca de informações/dados entre sistemas. Mas JSON significa JavaScript Object Notation

//conexao com o banco de dados Mysql
const sequelize = new Sequelize ('postapp','root','admin',{
    host: "localhost",
    dialect: "mysql"
})

//ROTAS - 

app.get('/', function(req, res){
  Post.findAll({order:[['id', 'DESC']]}).then(function(posts){//Quero passar posts para views home
  res.render('home',{posts:posts})
  })
  //ASC do antigo para o mais recente
  //DESC do recente para o antigo
})

app.get('/cad', function(req, res){
    res.render('formulario')// o expresse compreende que queremos renderizar o arquivo formulário do handlebars

})
//recebe dados de formulário
 app.post('/add', function(req, res){
   Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
   }).then(function() {
    res.redirect('/')
    //res.send("Post criado com sucesso")
   }).catch(function(erro) {
    res.send("Houve um erro: " + erro)

   })//Informa se houve falha ou não na criação do post 

 })
 app.get ('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.parms.id}}).then(function(){
        res.send("Postagem deletada com sucesso!")
    }).catch(function(erro){
        res.send("Esta postagem não existe!")
    })
 });