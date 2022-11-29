const Sequelize = require('sequelize')
const sequelize = new Sequelize ('teste', 'root','admin', {
    host: "localhost",
    dialect: "mysql"
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },

    idade: {
        type: Sequelize.INTEGER
    },

    email: {
        type: Sequelize.STRING
    }
})


//Gerar o model no MYSQL
//Usuario.sync({force:true}) //para confirmar a criação da tabela

Usuario.create({


nome: "Ana",
sobrenome: "Silva",
idade: 20,
email: "anasilva@hotmail.com",


nome: "Carla",
sobrenome: "Rebeca",
idade: 38,
email: "carla.rebecca@hotmail.com",

nome: "Julia",
sobrenome: "Nascimento",
idade: 84,
email: "julia.nascimento@hotmail.com",

nome: "Eduarda",
sobrenome: "Vitoria",
idade: 36,
email: "eduardavitoria@hotmail.com",

nome: "Raquel",
sobrenome: "Maria",
idade: 57,
email: "raquelmaria.sr@gmail.com",

nome: "Sadraqui",
sobrenome: "Rodrigues",
idade: 31,
email: "sadraquisr@gmail.com",

nome: "Joao",
sobrenome: "Lucas",
idade: 8,
email: "jl.rodrigues@gmail.com",
})