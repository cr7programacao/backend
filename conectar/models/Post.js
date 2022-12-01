const db = require('./db')

const Post = db.sequelize.define('postagens',{
    
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})
//Post.sync({force:true}) // excute uma unica vez e depois apague ou comente se nao 
module.exports = Post
