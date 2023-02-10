const sequelize = require ('sequelize');

const dataBase = new sequelize('database','root', 'root123', {
    dialect: 'mssql', host: 'localhost', port: 1433 
});

dataBase.sync();

module.exports = dataBase;
