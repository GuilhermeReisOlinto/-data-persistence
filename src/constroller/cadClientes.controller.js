const cadClientesModel = require('../models/cadClientesModel')

module.exports = {
    
    async create(req, res){
        try {
            const cadClientesRespose = await cadClientesModel.create(
                {
                    Nome: req.body.Nome,
                    Cpf: req.body.Cpf
                }
            )

            return res.json(cadClientesRespose);
        } catch (error) {
            console.error(error)
        }
    },
    
    async find (req, res){
        try {
            const cadClientesRespose = await cadClientesModel.findAll();

            return res.json(cadClientesRespose);
        } catch (error) {
            console.error(error)            
        }
    },

    async update(req, res) {
        try {
            const cadClientesRespose = await cadClientesModel.findByPk(req.body.idCliente);
            if (cadClientesRespose){
                cadClientesRespose.Nome = req.body.Nome;
                cadClientesRespose.Cpf = req.body.Cpf;
                await cadClientesRespose.save();
            }

            return res.json(cadClientesRespose)
        } catch (error) {
            console.error(error)
        }
    },

    async findOne(req, res) {
        try {
            const cadClientesRespose = await cadClientesModel.findByPk(req.body.idCliente)
            
            return res.json(cadClientesRespose)
        } catch (error) {
            console.error(error)
        }
    },

    async delete(req, res){
        try {
            const cadClientesRespose = await cadClientesModel.findByPk(req.body.idCliente)
            const delet = await cadClientesRespose.destroy();

            return res.json(delet)
        } catch (error) {
            console.error(error)
        }
    }
}