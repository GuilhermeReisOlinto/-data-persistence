const sequelize = require("sequelize")
const dataBase = require("../db")
const schema = "";

class CadCliente extends sequelize.Model{}
    
CadCliente.init(
    {
        idCliente:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        Nome:
        {
            type: sequelize.STRING,
            allowNull: false,
        },

        Cpf:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
    }, 
    //name of table
    {
        sequelize: dataBase, modelName: 'cadClientes', schema
    }
)

module.exports = CadCliente;

