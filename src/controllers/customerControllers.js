const fs = require("fs");

const registroJugadores = 'src/public/archivos/registroJugadores.txt';

const controller = {};

controller.index = ((req, res) => {
    res.render('index')
})

module.exports = controller;