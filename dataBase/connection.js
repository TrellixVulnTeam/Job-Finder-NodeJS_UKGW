const Sequelize = require('sequelize');

//conexao

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './dataBase/app.db'
});

//permissao para exportar essa variavel para outros arquivos
module.exports = sequelize;