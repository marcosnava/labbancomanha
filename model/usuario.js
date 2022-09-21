const Sequelize = require('sequelize');
const connection = require('../database/database');

const Usuario = connection.define(
    'usuario',
    {
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

// Usuario.sync({force: true});

module.exports = Usuario;