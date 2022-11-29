//CONECTAR AO BANCO DE DADOS USANDO O SEQUELIZE 

const Sequelize = require ('sequelize')
const sequelize = new Sequelize ('teste', 'root', 'GD1723van', {
    host: "localhost",
    dialect: "mysql"
})
//dentro dos parenteses que faremos nossa conexao com o banco de dados
//Dentro dos parenteses passo os parametros 
//o 1º sera o banco de dados do mysql que quero fazer conexao 'teste'
//2º O usuario que vc acessar seu mysql 'root'
//3º a senha utilizada '123456'
//4º um objeto json {host}
    //host: indica qual servidor esta nosso banco de dados 
    //dialect: qual tipo de banco de dados quer se conectar
//Por fim, testar para ver se a conexão deu certo.

//TESTE 
sequelize.authenticate ().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("falha ao se conectar: " +erro)
})