const express = require('express');
const routes = express.Router();

const PokemonsController = require('../controllers/PokemonsController');

routes.get('/', PokemonsController.initial);
routes.get('/:name', PokemonsController.show);

module.exports = routes;

