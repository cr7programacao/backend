const express = require("express");
const app = express();

//ROTA 

app.get("/", function(req, res)//chamo minha variavel app/ rota principal representada pela"/"
{
    res.sendFile(__dirname + "/aula21nov.html"); // enviar arquivos html utiliza a funcao sendfile // envia um arquivo para 
    //__dirname eh p diretorio raiz onde encontra-se minha pasta + o nome 
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/aula21.html");
});
app.get("/blog", function (req, res){
    res.send("bem vindo ao meu blog")
});

app.listen(8090, function(){
    console.log("Servidor rodando na url http:localhost:8090")
});