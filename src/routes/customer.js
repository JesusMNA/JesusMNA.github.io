const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerControllers');

//Cargar 
router.get('/', customerController.index);

module.exports = router;