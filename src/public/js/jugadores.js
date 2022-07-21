
async function consultarListaJugadores() {
    const response = await fetch("https://obligacionesxescaleras.herokuapp.com/consultar");
    const data = await response.text();
    if(response.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + response.status + " " + data.message;
    }
    else {
        return data;
    }
}

async function agregarDatosJugadores(institucion, grado, grupo, nombre, victoria) {
    let cuerpo = `{"institucion": "${institucion}","grado": "${grado}", "grupo": "${grupo}", "nombre": "${nombre}", "victoria": ${victoria}}`;
    let cuerpoJSON = JSON.parse(cuerpo);
    console.log(cuerpoJSON);
    console.log(JSON.stringify(cuerpoJSON));
    const res = await fetch(`https://obligacionesxescaleras.herokuapp.com/agregarJugador`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            mode: 'no-cors',
        },
        body: cuerpo
    });

    const data = await res.json();

    if(res.status !== 200) {
        console.log("Hubo un error: " + res.status + " " + data.message);
    }
}

async function obtenerListaJugadores() {
    let jugadoresRegistrados = await consultarListaJugadores();
    return jugadoresRegistrados;
}
