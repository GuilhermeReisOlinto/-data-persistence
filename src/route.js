const express = require('express');
const cadClientesController = require('./constroller/cadClientes.controller')

const routes = express.Router();

routes.get('/find', cadClientesController.find);

routes.post('/create', cadClientesController.create);

routes.post('/update', cadClientesController.update);

routes.get('/findOne', cadClientesController.findOne);

routes.post('/delete', cadClientesController.delete);

module.exports = routes;