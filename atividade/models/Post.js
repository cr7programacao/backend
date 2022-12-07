const db = require('./db')

const Post = db.sequelize.define('tratamento', {

    Cod: {
        type: db.Sequelize.STRING 
    },
    Produto: {
        type: db.Sequelize.TEXT
    },
    Propriedades: {
        type: db.Sequelize.TEXT
    },
    Linha: {
        type: db.Sequelize.TEXT
    }
})

//Post.sync({force:true})//execute uma unica vez e depois apague ou comente se nao 
module.exports = Post //acesso o model post atraves de outros arquivos 

