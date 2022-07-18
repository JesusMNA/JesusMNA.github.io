const { json } = require("body-parser");
const fs = require("fs");

const registroJugadores = 'src/public/archivos/registroJugadores.txt';

const controller = {};

controller.index = ((req, res) => {
    res.render('index')
})

controller.consultarJugadores = (req, res) => {
    fs.readFile(registroJugadores, 'utf-8', (err, data) => {
        if(err) {
            console.log('error: ', err)
        }
        else {
            res.send(data)
        }
    })
}

controller.agregarJugador = (req, res) => {
    let cuerpo = req.body;
    let texto = `institucion: "${cuerpo.institucion}",\ngrado: ${cuerpo.grado},\ngrupo: ${cuerpo.grupo},\nnombre: ${cuerpo.nombre},\nvictoria: ${cuerpo.victoria}\n\n`
    fs.appendFile(registroJugadores, texto, (err) => {
        if (err) {
            throw err;
        }
    })
}


module.exports = controller;