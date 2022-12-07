const Sequelize = require('sequelize')

// conexao banco de dados 
const sequelize = new Sequelize ('produto', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})
//Exportar o Sequelize e sequelize no mesmo arquivo 
//Auxilia pois cada models tera um arquivo individual. 
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
//boa pratica nome de cada models primeira letra maiuscula e no singular 