const Sequelize = require('sequelize')
const sequelize = new Sequelize ('teste', 'root', 'admin',{
    host: "localhost",
    dialect:"mysql"
})
//criar dois models
//postagem
//usuarios
//criando um modelo para postagem
//sequelize.define - define os campos da tabela
//postagens - será o nome da tabela
//Dentro das {} define os campos
const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING //dessa forma estou informado que o tipo do meu campo título é varchar - caracteres
},
    conteúdo: {
        type: Sequelize.TEXT
    },

})

Postagem.create ({

titulo: "Quero aprender banco de dados",
conteúdo: "dinheiro na conta"

    
});
//Gerar o model no MYSQL
//Postagem.sync({foce:true}) //para confirmar a criação da tabela 
//sincroniza o model com o mysql
//STRING tem um limite de caracters
//TEXT é ilimitado