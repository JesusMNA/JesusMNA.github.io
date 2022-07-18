const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerControllers');

//Cargar 
router.get('/', customerController.index);

//Consultar
router.get('/consultar', customerController.consultarJugadores);

//Agregar
router.post('/agregarJugador', customerController.agregarJugador);

module.exports = router;