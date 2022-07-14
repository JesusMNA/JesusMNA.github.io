let jugadores = [];

function agregarDatosJugadores(institucion, grado, grupo, nombre, victoria) {
    if(jugadores.length != 0) {
        jugadores.forEach(jugador => {
            if(jugador.institucion == institucion && jugador.grado == grado &&  jugador.grupo == grupo && jugador.nombre == nombre) {
                jugador.visitas++;
                jugador.victorias += victoria; 
            }
            else {
                let nuevoJugador = {
                    institucion: institucion,
                    grado: grado,
                    grupo: grupo,
                    nombre: nombre,
                    visitas: 1,
                    victorias: victoria
                }
                jugadores.push(nuevoJugador);
            }
        })
    }
    else {
        let nuevoJugador = {
            institucion: institucion,
            grado: grado,
            grupo: grupo,
            nombre: nombre,
            visitas: 1,
            victorias: victoria
        }
        jugadores.push(nuevoJugador);
    }
}

function obtenerListaJugadores() {
    return jugadores;
}