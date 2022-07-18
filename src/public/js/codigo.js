const rJugadores = document.querySelectorAll('input[name="jugadores"]');
const rPersonajes = document.querySelectorAll('input[name="rPersonajes"]');
const jugarI = document.getElementById("jugarInicio");
const pJugadores = document.getElementById("jugadores");
const pPersonajes = document.getElementById("datos");
const bSiguiente = document.getElementById("bSiguiente");
const nombreJugador = document.getElementById("nombre");
const institucionJugador = document.getElementById("institucion");
const gradoJugador = document.getElementById("grado");
const grupoJugador = document.getElementById("grupo");
const tNumeroJugador = document.getElementById("tNumeroJugador");
const pFondo = document.getElementById("fondo");
const mDado = document.getElementById("modal-dado");
const dContinuar = document.getElementById("modal-dado__continuar");
const dMostrar = document.getElementById("modal-dado__numero");
const dJugador = document.getElementById("modal-dado__jugador");
const mPregunta = document.getElementById("modal-pregunta");
const pJugador = document.getElementById("modal-pregunta__jugador");
const tirar = document.getElementById("tirar-dados");
const btnIniciar = document.getElementById("btn-iniciar");
const mInicio = document.getElementById("modal-inicio");
const iChico1 = document.getElementById("iChico1");
const iChica1 = document.getElementById("iChica1");
const iChico2 = document.getElementById("iChico2");
const iChica2 = document.getElementById("iChica2");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");
const turnoNombre = document.getElementById("turno-nombre");
const avanzarCasillas = document.getElementById("random");
const dado = document.getElementById("dado");
const cuadroDado = document.getElementById("cuadro-dado");
const cuadroPregunta = document.getElementById("cuadro-pregunta");
const pregunta = document.getElementById("pregunta");
const respuesta1 = document.getElementById("respuesta1");
const respuesta2 = document.getElementById("respuesta2");
const respuesta3 = document.getElementById("respuesta3");
const sonido = document.getElementById("sonido");
const mGanador = document.getElementById("ganador");
const textoGanador = document.getElementById("texto-ganador");
const personajeGanador = document.getElementById("personaje-ganador");
const botonGanador = document.getElementById("boton-ganador");
const textoRespuestaCorrecta = document.getElementById("respuestaCorrecta");
const botonRespuestaCorrecta = document.getElementById("continuarRespuestaCorrecta");
const mRespuestaCorrecta = document.getElementById("mRespuestaCorrecta");
const mInstrucciones = document.getElementById("mInstrucciones");
const regresarInstrucciones = document.getElementById("regresarInsrucciones");
const instrucciones = document.getElementById("btn-instrucciones");
const listaJugadores = document.getElementById("listaJugadores");
const modalListaJugadores = document.getElementById("mListaJugadores");
const cerrarListaJugadores = document.getElementById("cerrarListaJugadores");
const cuerpoListaJugadores = document.getElementById("cuerpoListaJugadores");

sonido.volume = 0.25;

sonido.addEventListener("ended", () => {
    sonido.play();
});

botonRespuestaCorrecta.addEventListener("click", () => {
    mRespuestaCorrecta.classList.remove("modal-pregunta-incorrecta--show");
    textoRespuestaCorrecta.innerHTML = "";
});

regresarInstrucciones.addEventListener("click", () => {
    mInstrucciones.classList.remove("modal-instrucciones--show");
})

instrucciones.addEventListener("click", () => {
    mInstrucciones.classList.add("modal-instrucciones--show");
})

async function imprimirJugadores() {
    let registroJugadores = await obtenerListaJugadores();
    if (registroJugadores.length > 0) {
        cuerpoListaJugadores.innerHTML = "";
        let jsonJugador = document.createElement('p');
        jsonJugador.innerText = registroJugadores;
        cuerpoListaJugadores.appendChild(jsonJugador);
    }
    else {
        cuerpoListaJugadores.innerHTML = "";
        let mensajeVacio = document.createElement('p');
        mensajeVacio.innerText = "Aún no se ha registrado ningún jugador";
        cuerpoListaJugadores.appendChild(mensajeVacio)
    }
}

listaJugadores.addEventListener("click", () => {
    modalListaJugadores.classList.add("mLista-jugadores--show");
    imprimirJugadores("nada");
})

cerrarListaJugadores.addEventListener("click", () => {
    modalListaJugadores.classList.remove("mLista-jugadores--show");
})

let numeroJugadores;
let nJugador = 0;
let numPersonaje = 0;
let numeroCasillas = 0;
let Respuesta = "";
let direccion = "";
let cantidad = 0;
let posicionTemporal = 0;
let filaTemporal = 0;

const jugador1 = new Jugador({ nombre: "", personaje: "", numeroJugador: 1 });
const jugador2 = new Jugador({ nombre: "", personaje: "", numeroJugador: 2 });
const jugador3 = new Jugador({ nombre: "", personaje: "", numeroJugador: 3 });
const jugador4 = new Jugador({ nombre: "", personaje: "", numeroJugador: 4 });

botonGanador.addEventListener("click", () => {
    window.location.reload();
})

btnIniciar.addEventListener("click", () => {
    sonido.play();
    mInicio.classList.remove("inicio--show");
    pJugadores.classList.add("jugadores--show");
})

iChico1.addEventListener("mouseover", () => {
    iChico1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 1/chico 1_Mesa de trabajo 1.png")
});

iChico1.addEventListener("mouseout", cambiarChico1);

function cambiarChico1() {
    iChico1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png");
}

iChica1.addEventListener("mouseover", () => {
    iChica1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-10.png")
});

iChica1.addEventListener("mouseout", cambiarChica1);

function cambiarChica1() {
    iChica1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png")
}

iChico2.addEventListener("mouseover", () => {
    iChico2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 2/chico 2-03.png")
});

iChico2.addEventListener("mouseout", cambiarChico2);

function cambiarChico2() {
    iChico2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png")
}

iChica2.addEventListener("mouseover", () => {
    iChica2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 4/chica 4-12.png")
});

iChica2.addEventListener("mouseout", cambiarChica2);

function cambiarChica2() {
    iChica2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png")
}

iChico1.addEventListener("click", () => {
    iChico1.classList.add("seleccionado-temporal");
    iChico1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 1/chico 1_Mesa de trabajo 1.png")
    iChico1.removeEventListener("mouseout", cambiarChico1, false)
    iChica1.classList.remove("seleccionado-temporal");
    iChica1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png")
    iChica1.addEventListener("mouseout", cambiarChica1);
    iChico2.classList.remove("seleccionado-temporal");
    iChico2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png")
    iChico2.addEventListener("mouseout", cambiarChico2);
    iChica2.classList.remove("seleccionado-temporal");
    iChica2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png")
    iChica2.addEventListener("mouseout", cambiarChica2);
    numPersonaje = 1;
})

iChica1.addEventListener("click", () => {
    iChica1.classList.add("seleccionado-temporal");
    iChica1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-10.png")
    iChica1.removeEventListener("mouseout", cambiarChica1, false)
    iChico1.classList.remove("seleccionado-temporal");
    iChico1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png")
    iChico1.addEventListener("mouseout", cambiarChico1);
    iChico2.classList.remove("seleccionado-temporal");
    iChico2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png")
    iChico2.addEventListener("mouseout", cambiarChico2);
    iChica2.classList.remove("seleccionado-temporal");
    iChica2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png")
    iChica2.addEventListener("mouseout", cambiarChica2);
    numPersonaje = 2;
})

iChico2.addEventListener("click", () => {
    iChico2.classList.add("seleccionado-temporal");
    iChico2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 2/chico 2-03.png")
    iChico2.removeEventListener("mouseout", cambiarChico2, false)
    iChica1.classList.remove("seleccionado-temporal");
    iChica1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png")
    iChica1.addEventListener("mouseout", cambiarChica1);
    iChico1.classList.remove("seleccionado-temporal");
    iChico1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png")
    iChico1.addEventListener("mouseout", cambiarChico1);
    iChica2.classList.remove("seleccionado-temporal");
    iChica2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png")
    iChica2.addEventListener("mouseout", cambiarChica2);
    numPersonaje = 3;
})

iChica2.addEventListener("click", () => {
    iChica2.classList.add("seleccionado-temporal");
    iChica2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 4/chica 4-12.png")
    iChica2.removeEventListener("mouseout", cambiarChica2, false)
    iChica1.classList.remove("seleccionado-temporal");
    iChica1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png")
    iChica1.addEventListener("mouseout", cambiarChica1);
    iChico2.classList.remove("seleccionado-temporal");
    iChico2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png")
    iChico2.addEventListener("mouseout", cambiarChico2);
    iChico1.classList.remove("seleccionado-temporal");
    iChico1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png")
    iChico1.addEventListener("mouseout", cambiarChico1);
    numPersonaje = 4;
})

function decir(texto) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

function ReiniciarCuadro() {
    cuadroDado.classList.add("lanzar-dado--show");
    cuadroPregunta.classList.remove("pregunta--show");
    pregunta.innerHTML = "";
    respuesta1.innerHTML = "";
    respuesta2.innerHTML = "";
    respuesta3.innerHTML = "";
}

function dibujarSubir() {
    if (nJugador === 1) {
        if (jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1_Mesa de trabajo 1.png")';
        }
        else if (jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-05.png")';
        }
        else if(jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-03.png")';
        }
        else if(jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4_Mesa de trabajo 1.png")';
        }
    }
    if (nJugador === 2) {
        if (jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1_Mesa de trabajo 1.png")';
        }
        else if (jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-05.png")';
        }
        else if(jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-03.png")';
        }
        else if(jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4_Mesa de trabajo 1.png")';
        }
    }
    if (nJugador === 3) {
        if (jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1_Mesa de trabajo 1.png")';
        }
        else if (jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-05.png")';
        }
        else if(jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-03.png")';
        }
        else if(jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4_Mesa de trabajo 1.png")';
        }
    }
    if (nJugador === 4) {
        if (jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1_Mesa de trabajo 1.png")';
        }
        else if (jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-05.png")';
        }
        else if(jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-03.png")';
        }
        else if(jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4_Mesa de trabajo 1.png")';
        }
    }
}

function dibujarBajar() {
    if (nJugador === 1) {
        if (jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1-05.png")';
        }
        else if (jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-08.png")';
        }
        else if(jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-02.png")';
        }
        else if(jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4-06.png")';
        }
    }
    if (nJugador === 2) {
        if (jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1-05.png")';
        }
        else if (jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-08.png")';
        }
        else if(jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-02.png")';
        }
        else if(jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4-06.png")';
        }
    }
    if (nJugador === 3) {
        if (jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1-05.png")';
        }
        else if (jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-08.png")';
        }
        else if(jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-02.png")';
        }
        else if(jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4-06.png")';
        }
    }
    if (nJugador === 4) {
        if (jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1-05.png")';
        }
        else if (jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-08.png")';
        }
        else if(jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-02.png")';
        }
        else if(jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4-06.png")';
        }
    }
}

function dibujarNormal() {
    if (jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
        player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png")';
    }
    else if (jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
        player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png")';
    }
    else if(jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
        player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png")';
    }
    else if(jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
        player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png")';
    }
    if (jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
        player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png")';
    }
    else if (jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
        player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png")';
    }
    else if(jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
        player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png")';
    }
    else if(jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
        player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png")';
    }
    if (jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
        player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png")';
    }
    else if (jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
        player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png")';
    }
    else if(jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
        player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png")';
    }
    else if(jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
        player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png")';
    }
    if (jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
        player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png")';
    }
    else if (jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
        player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png")';
    }
    else if(jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
        player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png")';
    }
    else if(jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
        player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png")';
    }
}

function Jugador({
    institucion,
    grado,
    grupo,
    nombre,
    personaje,
    numeroJugador,
}) {
    this.institucion = institucion,
    this.grado = grado,
    this.grupo = grupo,
    this.nombre = nombre;
    this.personaje = personaje;
    this.posicion = 1;
    this.numeroJugador = numeroJugador;
    this.fila = 1;
    this.victoria = 0;
}

function preguntar() {
    cuadroDado.classList.remove("lanzar-dado--show");
    cuadroPregunta.classList.add("pregunta--show");
    let random = Math.floor((Math.random() * (12 - 1 + 1)) + 1);
    if(random == 1) {
        pregunta.innerHTML = "Se refiere a que toda la ciudadanía tiene derecho a elegir a sus representantes, sin importar su sexo, identidad, color de piel, condición económica, entre otras características."
        respuesta1.innerHTML = "Universal";
        respuesta2.innerHTML = "Libre";
        respuesta3.innerHTML = "Condicionado";
        Respuesta = 1;
    }
    else if(random == 2) {
        pregunta.innerHTML = "Es la garantía que tiene la ciudadanía al elegir. Nadie podrá saber el sentido de su voto a menos de que la misma persona lo diga."
        respuesta1.innerHTML = "Personal";
        respuesta2.innerHTML = "Secreto";
        respuesta3.innerHTML = "Intransferible";
        Respuesta = 2;
    }
    else if(random == 3) {
        pregunta.innerHTML = "Se refiere a que la ciudadanía podrá votar directamente por el candidato o candidata que ejercerá el cargo de elección popular por el que se postula"
        respuesta1.innerHTML = "Directo";
        respuesta2.innerHTML = "Intransferible";
        respuesta3.innerHTML = "Voluntario"
        Respuesta = 1;
    }
    else if(random == 4) {
        pregunta.innerHTML = "La ley indica que el voto deberá ejercerse solo por una persona, sin que otra persona o grupo pueda hacerlo a su nombre."
        respuesta1.innerHTML = "Directo";
        respuesta2.innerHTML = "Personal";
        respuesta3.innerHTML = "Libre";
        Respuesta = 2;
    }
    else if(random == 5) {
        pregunta.innerHTML = "Es una característica del voto que protegen las leyes mexicanas y consiste en que nadie podrá darle los votos que obtuvo un candidato, a otro."
        respuesta1.innerHTML = "Condicionado";
        respuesta2.innerHTML = "Razonado";
        respuesta3.innerHTML = "Intransferible";
        Respuesta = 3;
    }
    else if(random == 6) {
        pregunta.innerHTML = "Se refiere a que la ciudadanía ejerza este derecho sin presiones ni influencia de otras personas."
        respuesta1.innerHTML = "Razonado";
        respuesta2.innerHTML = "Libre";
        respuesta3.innerHTML = "Condicionado";
        Respuesta = 2
    }
    else if(random == 7) {
        pregunta.innerHTML = "Es un tipo de voto que se pone a disposición de la ciudadanía con el propósito de que aquellos que quieran asistir, lo hagan motivados por el solo hecho de elegir."
        respuesta1.innerHTML = "Obligatorio";
        respuesta2.innerHTML = "Voluntario";
        respuesta3.innerHTML = "Universal";
        Respuesta = 2;
    }
    else if(random == 8) {
        pregunta.innerHTML = "Se refiere a la obligación que tiene la ciudadanía de acudir a emitir su voto, ya que de no hacerlo, las autoridades podrían sancionarles."
        respuesta1.innerHTML = "Condicionado";
        respuesta2.innerHTML = "Voluntario";
        respuesta3.innerHTML = "Obligatorio";
        Respuesta = 3;
    }
    else if(random == 9) {
        pregunta.innerHTML = "Es una de las características principales del voto, ya que, si se eligen autoridades, el acceso al voto no debe estar condicionado a algún pago por parte de la ciudadanía."
        respuesta1.innerHTML = "Gratuito";
        respuesta2.innerHTML = "Libre";
        respuesta3.innerHTML = "Directo";
        Respuesta = 1;
    }
    else if(random == 10) {
        pregunta.innerHTML = "Es un tipo de voto que va en contra de los valores democráticos y consiste en que la persona electora se compromete a votar por alguien a cambio de algo."
        respuesta1.innerHTML = "Obligatorio";
        respuesta2.innerHTML = "Condicionado";
        respuesta3.innerHTML = "Directo";
        Respuesta = 2;
    }
    else if(random == 11) {
        pregunta.innerHTML = "Es una característica no incluida en las leyes, pero que invita a las personas electoras a votar conociendo el perfil de los candidatos o candidatas"
        respuesta1.innerHTML = "Libre";
        respuesta2.innerHTML = "Condicionado";
        respuesta3.innerHTML = "Informado";
        Respuesta = 3;
    }
    else if(random == 12) {
        pregunta.innerHTML = "Es la invitación que se hace a la persona electora a reflexionar antes de votar."
        respuesta1.innerHTML = "Voluntario";
        respuesta2.innerHTML = "Directo";
        respuesta3.innerHTML = "Razonado";
        Respuesta = 3;
    }
    if (nJugador === 1) {
        pJugador.innerHTML = `Pregunta para ${jugador1.nombre}`;
        if (jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1-03.png")';
        }
        else if (jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos_Mesa de trabajo 1.png")';
        }
        else if(jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-08.png")';
        }
        else if(jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            player1.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4-12.png")';
        }
    }
    else if (nJugador === 2) {
        pJugador.innerHTML = `Pregunta para ${jugador2.nombre}`;
        if (jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1-03.png")';
        }
        else if (jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos_Mesa de trabajo 1.png")';
        }
        else if(jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-08.png")';
        }
        else if(jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            player2.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4-12.png")';
        }
    }
    else if (nJugador === 3) {
        pJugador.innerHTML = `Pregunta para ${jugador3.nombre}`;
        if (jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1-03.png")';
        }
        else if (jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos_Mesa de trabajo 1.png")';
        }
        else if(jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-08.png")';
        }
        else if(jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            player3.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4-12.png")';
        }
    }
    if (nJugador === 4) {
        pJugador.innerHTML = `Pregunta para ${jugador4.nombre}`;
        if (jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1-03.png")';
        }
        else if (jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos_Mesa de trabajo 1.png")';
        }
        else if(jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-08.png")';
        }
        else if(jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            player4.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4-12.png")';
        }
    }
}


function respuestaCorrecta() {
    dibujarSubir();
    if(direccion == "ARRIBA") {
        if (nJugador == 1) {
            player1.style.top = `${(player1.offsetTop + cantidad)}px`;
            jugador1.posicion = posicionTemporal;
            jugador1.fila = filaTemporal;
        }
        else if (nJugador == 2) {
            player2.style.top = `${(player2.offsetTop + cantidad)}px`;
            jugador2.posicion = posicionTemporal;
            jugador2.fila = filaTemporal;
        }
        else if (nJugador == 3) {
            player3.style.top = `${(player3.offsetTop + cantidad)}px`;
            jugador3.posicion = posicionTemporal;
            jugador3.fila = filaTemporal;
        }
        else if (nJugador == 4) {
            player4.style.top = `${(player4.offsetTop + cantidad)}px`;
            jugador4.posicion = posicionTemporal;
            jugador4.fila = filaTemporal;
        }
    }
    else {
        nJugador++;
        if (nJugador === 5) {
            nJugador = 1;
        }
        if (nJugador === 1) {
            turnoNombre.innerText = `Turno de ${jugador1.nombre}`;
            decir(`Turno de ${jugador1.nombre}`);
        }
        if (nJugador === 2) {
            turnoNombre.innerText = `Turno de ${jugador2.nombre}`;
            decir(`Turno de ${jugador2.nombre}`);
        }
        if (nJugador === 3) {
            turnoNombre.innerText = `Turno de ${jugador3.nombre}`;
            decir(`Turno de ${jugador3.nombre}`);
        }
        if (nJugador === 4) {
            turnoNombre.innerText = `Turno de ${jugador4.nombre}`;
            decir(`Turno de ${jugador4.nombre}`);
        }
        avanzarCasillas.style.backgroundImage = "url('')";
    }
    ReiniciarCuadro();
}

function respuestaIncorrecta() {
    dibujarBajar();
    if(direccion == "ABAJO") {
        if (nJugador == 1) {
            player1.style.top = `${(player1.offsetTop - cantidad)}px`;
            jugador1.posicion = posicionTemporal;
            jugador1.fila = filaTemporal;
        }
        else if (nJugador == 2) {
            player2.style.top = `${(player2.offsetTop - cantidad)}px`;
            jugador2.posicion = posicionTemporal;
            jugador2.fila = filaTemporal;
        }
        else if (nJugador == 3) {
            player3.style.top = `${(player3.offsetTop - cantidad)}px`;
            jugador3.posicion = posicionTemporal;
            jugador3.fila = filaTemporal;
        }
        else if (nJugador == 4) {
            player4.style.top = `${(player4.offsetTop - cantidad)}px`;
            jugador4.posicion = posicionTemporal;
            jugador4.fila = filaTemporal;
        }
    }
    else {
        nJugador++;
        if (nJugador === 5) {
            nJugador = 1;
        }
        if (nJugador === 1) {
            turnoNombre.innerText = `Turno de ${jugador1.nombre}`;
            decir(`Turno de ${jugador1.nombre}`);
        }
        if (nJugador === 2) {
            turnoNombre.innerText = `Turno de ${jugador2.nombre}`;
            decir(`Turno de ${jugador2.nombre}`);
        }
        if (nJugador === 3) {
            turnoNombre.innerText = `Turno de ${jugador3.nombre}`;
            decir(`Turno de ${jugador3.nombre}`);
        }
        if (nJugador === 4) {
            turnoNombre.innerText = `Turno de ${jugador4.nombre}`;
            decir(`Turno de ${jugador4.nombre}`);
        }
        avanzarCasillas.style.backgroundImage = "url('')";
    }
    if(Respuesta == 1) {
        textoRespuestaCorrecta.innerHTML = respuesta1.innerHTML;
    }
    else if(Respuesta == 2) {
        textoRespuestaCorrecta.innerHTML = respuesta2.innerHTML;
    }
    else if(Respuesta == 3) {
        textoRespuestaCorrecta.innerHTML = respuesta3.innerHTML;
    }
    mRespuestaCorrecta.classList.add("modal-pregunta-incorrecta--show");
    ReiniciarCuadro();
}

respuesta1.addEventListener("click", () => {
    if(Respuesta == 1) {
        respuestaCorrecta();
    }
    else {
        respuestaIncorrecta();
    }
})

respuesta2.addEventListener("click", () => {
    if(Respuesta == 2) {
        respuestaCorrecta();
    }
    else {
        respuestaIncorrecta();
    }
})

respuesta3.addEventListener("click", () => {
    if(Respuesta == 3) {
        respuestaCorrecta();
    }
    else {
        respuestaIncorrecta();
    }
})


function avanzar() {
    dibujarSubir();
    if(jugador1.posicion === 60) {
        ganador();
        return;
    }
    else if(jugador2.posicion === 60) {
        ganador();
        return;
    }
    else if(jugador3.posicion === 60) {
        ganador();
        return;
    }
    else if(jugador4.posicion === 60) {
        ganador();
        return;
    }
    if(numeroCasillas !== 0){
        dado.style.opacity = 0.5;
        dado.style.pointerEvents = 'none';
        if (nJugador == 1) {
            if(jugador1.fila === 1 || jugador1.fila === 3 || jugador1.fila === 5) {
                if((12 - jugador1.posicion) === 1 || (34 - jugador1.posicion) === 1 || (56 - jugador1.posicion) === 1) {
                    player1.style.top = `${(player1.offsetTop + 79)}px`;
                    jugador1.posicion++;
                    jugador1.fila++;
                    numeroCasillas--;
                }
                else {
                    player1.style.left = `${(player1.offsetLeft + 79)}px`
                    jugador1.posicion++;
                    numeroCasillas--;
                }
            } else {
                if((23 - jugador1.posicion) === 1 || (45 - jugador1.posicion) === 1) {
                    player1.style.top = `${(player1.offsetTop + 79)}px`;
                    jugador1.posicion++;
                    jugador1.fila++;
                    numeroCasillas--;
                }
                else {
                    player1.style.left = `${(player1.offsetLeft - 79)}px`
                    jugador1.posicion++;
                    numeroCasillas--;
                }
            }
        }
        else if (nJugador == 2) {
            if(jugador2.fila === 1 || jugador2.fila === 3 || jugador2.fila === 5) {
                if((12 - jugador2.posicion) === 1 || (34 - jugador2.posicion) === 1 || (56 - jugador2.posicion) === 1) {
                    player2.style.top = `${(player2.offsetTop + 79)}px`;
                    jugador2.posicion++;
                    jugador2.fila++;
                    numeroCasillas--;
                }
                else {
                    player2.style.left = `${(player2.offsetLeft + 79)}px`
                    jugador2.posicion++;
                    numeroCasillas--;
                }
            } else {
                if((23 - jugador2.posicion) === 1 || (45 - jugador2.posicion) === 1) {
                    player2.style.top = `${(player2.offsetTop + 79)}px`;
                    jugador2.posicion++;
                    jugador2.fila++;
                    numeroCasillas--;
                }
                else {
                    player2.style.left = `${(player2.offsetLeft - 79)}px`
                    jugador2.posicion++;
                    numeroCasillas--;
                }
            }
        }
        else if (nJugador == 3) {
            if(jugador3.fila === 1 || jugador3.fila === 3 || jugador3.fila === 5) {
                if((12 - jugador3.posicion) === 1 || (34 - jugador3.posicion) === 1 || (56 - jugador3.posicion) === 1) {
                    player3.style.top = `${(player3.offsetTop + 79)}px`;
                    jugador3.posicion++;
                    jugador3.fila++;
                    numeroCasillas--;
                }
                else {
                    player3.style.left = `${(player3.offsetLeft + 79)}px`
                    jugador3.posicion++;
                    numeroCasillas--;
                }
            } else {
                if((23 - jugador3.posicion) === 1 || (45 - jugador3.posicion) === 1) {
                    player3.style.top = `${(player3.offsetTop + 79)}px`;
                    jugador3.posicion++;
                    jugador3.fila++;
                    numeroCasillas--;
                }
                else {
                    player3.style.left = `${(player3.offsetLeft - 79)}px`
                    jugador3.posicion++;
                    numeroCasillas--;
                }
            }
        }
        else if (nJugador == 4) {
            if(jugador4.fila === 1 || jugador4.fila === 3 || jugador4.fila === 5) {
                if((12 - jugador4.posicion) === 1 || (34 - jugador4.posicion) === 1 || (56 - jugador4.posicion) === 1) {
                    player4.style.top = `${(player4.offsetTop + 79)}px`;
                    jugador4.posicion++;
                    jugador4.fila++;
                    numeroCasillas--;
                }
                else {
                    player4.style.left = `${(player4.offsetLeft + 79)}px`
                    jugador4.posicion++;
                    numeroCasillas--;
                }
            } else {
                if((23 - jugador4.posicion) === 1 || (45 - jugador4.posicion) === 1) {
                    player4.style.top = `${(player4.offsetTop + 79)}px`;
                    jugador4.posicion++;
                    jugador4.fila++;
                    numeroCasillas--;
                }
                else {
                    player4.style.left = `${(player4.offsetLeft - 79)}px`
                    jugador4.posicion++;
                    numeroCasillas--;
                }
            }
        }
    }
    else {
        if (nJugador === 1) {
            if (jugador1.posicion === 11) {
                direccion = "ARRIBA";
                cantidad = 237;
                posicionTemporal = 34;
                filaTemporal = 4;
                preguntar();
                nJugador--;
            }
            else if(jugador1.posicion === 27) {
                direccion = "ARRIBA";
                cantidad = 79;
                posicionTemporal = 40;
                filaTemporal = 4;
                preguntar();
                nJugador--;
            }
            else if (jugador1.posicion === 39) {
                direccion = "ARRIBA";
                cantidad = 79;
                posicionTemporal = 50;
                filaTemporal = 5;
                preguntar();
                nJugador--;
            }
            else if (jugador1.posicion === 53) {
                direccion = "ARRIBA";
                cantidad = 79;
                posicionTemporal = 58;
                filaTemporal = 6;
                preguntar();
                nJugador--;
            }
            else if (jugador1.posicion === 21){
                direccion = "ARRIBA";
                cantidad = 158;
                posicionTemporal = 43;
                filaTemporal = 4;
                preguntar();
                nJugador--;
            }
            else if (jugador1.posicion === 30) {
                direccion = "ABAJO";
                cantidad = 158;
                posicionTemporal = 8;
                filaTemporal = 1;
                preguntar("ABAJO", 158);
                nJugador--;
            }
            else if (jugador1.posicion === 45) {
                direccion = "ABAJO";
                cantidad = 158;
                posicionTemporal = 23;
                filaTemporal = 3;
                preguntar("ABAJO", 158);
                nJugador--;
            }
            else if (jugador1.posicion === 54) {
                direccion = "ABAJO";
                cantidad = 158;
                posicionTemporal = 32;
                filaTemporal = 3;
                preguntar("ABAJO", 158);
                nJugador--;
            }
            else if(jugador1.posicion === 48) {
                direccion = "ABAJO";
                cantidad = 316;
                posicionTemporal = 4;
                filaTemporal = 1;
                preguntar();
                nJugador--;
            }
        }
        else if (nJugador === 2) {
            if (jugador2.posicion === 11) {
                direccion = "ARRIBA";
                cantidad = 237;
                posicionTemporal = 34;
                filaTemporal = 4;
                preguntar();
                nJugador--;
            }
            else if(jugador2.posicion === 27) {
                direccion = "ARRIBA";
                cantidad = 79;
                posicionTemporal = 40;
                filaTemporal = 4;
                preguntar();
                nJugador--;
            }
            else if (jugador2.posicion === 39) {
                direccion = "ARRIBA";
                cantidad = 79;
                posicionTemporal = 50;
                filaTemporal = 5;
                preguntar();
                nJugador--;
            }
            else if (jugador2.posicion === 53) {
                direccion = "ARRIBA";
                cantidad = 79;
                posicionTemporal = 58;
                filaTemporal = 6;
                preguntar();
                nJugador--;
            }
            else if (jugador2.posicion === 21){
                direccion = "ARRIBA";
                cantidad = 158;
                posicionTemporal = 43;
                filaTemporal = 4;
                preguntar();
                nJugador--;
            }
            else if (jugador2.posicion === 30) {
                direccion = "ABAJO";
                cantidad = 158;
                posicionTemporal = 8;
                filaTemporal = 1;
                preguntar("ABAJO", 158);
                nJugador--;
            }
            else if (jugador2.posicion === 45) {
                direccion = "ABAJO";
                cantidad = 158;
                posicionTemporal = 23;
                filaTemporal = 3;
                preguntar("ABAJO", 158);
                nJugador--;
            }
            else if (jugador2.posicion === 54) {
                direccion = "ABAJO";
                cantidad = 158;
                posicionTemporal = 32;
                filaTemporal = 3;
                preguntar("ABAJO", 158);
                nJugador--;
            }
            else if(jugador2.posicion === 48) {
                direccion = "ABAJO";
                cantidad = 316;
                posicionTemporal = 4;
                filaTemporal = 1;
                preguntar();
                nJugador--;
            }
        }
        if (nJugador === 3) {
            if (jugador3.posicion === 11) {
                direccion = "ARRIBA";
                cantidad = 237;
                posicionTemporal = 34;
                filaTemporal = 4;
                preguntar();
                nJugador--;
            }
            else if(jugador3.posicion === 27) {
                direccion = "ARRIBA";
                cantidad = 79;
                posicionTemporal = 40;
                filaTemporal = 4;
                preguntar();
                nJugador--;
            }
            else if (jugador3.posicion === 39) {
                direccion = "ARRIBA";
                cantidad = 79;
                posicionTemporal = 50;
                filaTemporal = 5;
                preguntar();
                nJugador--;
            }
            else if (jugador3.posicion === 53) {
                direccion = "ARRIBA";
                cantidad = 79;
                posicionTemporal = 58;
                filaTemporal = 6;
                preguntar();
                nJugador--;
            }
            else if (jugador3.posicion === 21){
                direccion = "ARRIBA";
                cantidad = 158;
                posicionTemporal = 43;
                filaTemporal = 4;
                preguntar();
                nJugador--;
            }
            else if (jugador3.posicion === 30) {
                direccion = "ABAJO";
                cantidad = 158;
                posicionTemporal = 8;
                filaTemporal = 1;
                preguntar("ABAJO", 158);
                nJugador--;
            }
            else if (jugador3.posicion === 45) {
                direccion = "ABAJO";
                cantidad = 158;
                posicionTemporal = 23;
                filaTemporal = 3;
                preguntar("ABAJO", 158);
                nJugador--;
            }
            else if (jugador3.posicion === 54) {
                direccion = "ABAJO";
                cantidad = 158;
                posicionTemporal = 32;
                filaTemporal = 3;
                preguntar("ABAJO", 158);
                nJugador--;
            }
            else if(jugador3.posicion === 48) {
                direccion = "ABAJO";
                cantidad = 316;
                posicionTemporal = 4;
                filaTemporal = 1;
                preguntar();
                nJugador--;
            }
        }
        if (nJugador === 4) {
            if (jugador4.posicion === 11) {
                direccion = "ARRIBA";
                cantidad = 237;
                posicionTemporal = 34;
                filaTemporal = 4;
                preguntar();
                nJugador--;
            }
            else if(jugador4.posicion === 27) {
                direccion = "ARRIBA";
                cantidad = 79;
                posicionTemporal = 40;
                filaTemporal = 4;
                preguntar();
                nJugador--;
            }
            else if (jugador4.posicion === 39) {
                direccion = "ARRIBA";
                cantidad = 79;
                posicionTemporal = 50;
                filaTemporal = 5;
                preguntar();
                nJugador--;
            }
            else if (jugador4.posicion === 53) {
                direccion = "ARRIBA";
                cantidad = 79;
                posicionTemporal = 58;
                filaTemporal = 6;
                preguntar();
                nJugador--;
            }
            else if (jugador4.posicion === 21){
                direccion = "ARRIBA";
                cantidad = 158;
                posicionTemporal = 43;
                filaTemporal = 4;
                preguntar();
                nJugador--;
            }
            else if (jugador4.posicion === 30) {
                direccion = "ABAJO";
                cantidad = 158;
                posicionTemporal = 8;
                filaTemporal = 1;
                preguntar("ABAJO", 158);
                nJugador--;
            }
            else if (jugador4.posicion === 45) {
                direccion = "ABAJO";
                cantidad = 158;
                posicionTemporal = 23;
                filaTemporal = 3;
                preguntar("ABAJO", 158);
                nJugador--;
            }
            else if (jugador4.posicion === 54) {
                direccion = "ABAJO";
                cantidad = 158;
                posicionTemporal = 32;
                filaTemporal = 3;
                preguntar("ABAJO", 158);
                nJugador--;
            }
            else if(jugador4.posicion === 48) {
                direccion = "ABAJO";
                cantidad = 316;
                posicionTemporal = 4;
                filaTemporal = 1;
                preguntar();
                nJugador--;
            }
        }
        nJugador++;
        if(nJugador === 2 && numeroJugadores > 1) {
            turnoNombre.innerText = `Turno de ${jugador2.nombre}`;
            decir(`Turno de ${jugador2.nombre}`);
        }
        else if(nJugador === 3 && numeroJugadores > 2) {
            turnoNombre.innerText = `Turno de ${jugador3.nombre}`;
            decir(`Turno de ${jugador3.nombre}`);
        }
        else if(nJugador === 4 && numeroJugadores > 3) {
            turnoNombre.innerText = `Turno de ${jugador4.nombre}`;
            decir(`Turno de ${jugador4.nombre}`);
        }
        if(nJugador > numeroJugadores) {
            nJugador = 1;
            turnoNombre.innerText = `Turno de ${jugador1.nombre}`;
            decir(`Turno de ${jugador1.nombre}`);
        }
        avanzarCasillas.style.backgroundImage = "url('')";
        dado.style.opacity = 1;
        dado.style.pointerEvents = 'unset';
    }
}

player1.addEventListener("transitionend", () => {
    avanzar();
})

player2.addEventListener("transitionend", () => {
    avanzar();
})

player3.addEventListener("transitionend", () => {
    avanzar();
})

player4.addEventListener("transitionend", () => {
    avanzar();
})

dado.addEventListener("click", () => {
    let random = Math.floor((Math.random() * (6 - 1 + 1)) + 1);
    let textoDecirCara = `Avanzar ${random} casillas`;
    if (random == 1) {
        avanzarCasillas.style.backgroundImage = 'url("../Imagenes/dados/DADOS-01.png")';
        decir(textoDecirCara);
    }
    else if (random == 2) {
        avanzarCasillas.style.backgroundImage = 'url("../Imagenes/dados/DADOS-02.png")';
        decir(textoDecirCara);
    }
    else if (random == 3) {
        avanzarCasillas.style.backgroundImage = 'url("../Imagenes/dados/DADOS-03.png")';
        decir(textoDecirCara);
    }
    else if (random == 4) {
        avanzarCasillas.style.backgroundImage = 'url("../Imagenes/dados/DADOS-04.png")';
        decir(textoDecirCara);
    }
    else if (random == 5) {
        avanzarCasillas.style.backgroundImage = 'url("../Imagenes/dados/DADOS-05.png")';
        decir(textoDecirCara);
    }
    else if (random == 6) {
        avanzarCasillas.style.backgroundImage = 'url("../Imagenes/dados/DADOS-06.png")';
        decir(textoDecirCara);
    }
    numeroCasillas = random;
    dibujarNormal();
    avanzar();
})

async function ganador() {
    mGanador.classList.add("modal-ganador--show");
    if (nJugador === 1) {
        jugador1.victoria = 1;
        textoGanador.innerHTML = `¡Felicidades ${jugador1.nombre}! eres el ganador`;
        decir(`¡Felicidades ${jugador1.nombre}! eres el ganador`);
        if (jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1_Mesa de trabajo 1.png")';
        }
        else if (jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-05.png")';
        }
        else if(jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-03.png")';
        }
        else if(jugador1.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4_Mesa de trabajo 1.png")';
        }
    }
    if (nJugador === 2) {
        jugador2.victoria = 1;
        textoGanador.innerHTML = `¡Felicidades ${jugador2.nombre}! eres el ganador`;
        decir(`¡Felicidades ${jugador2.nombre}! eres el ganador`);
        if (jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1_Mesa de trabajo 1.png")';
        }
        else if (jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-05.png")';
        }
        else if(jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-03.png")';
        }
        else if(jugador2.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4_Mesa de trabajo 1.png")';
        }
    }
    if (nJugador === 3) {
        jugador3.victoria = 1;
        textoGanador.innerHTML = `¡Felicidades ${jugador3.nombre}! eres el ganador`;
        decir(`¡Felicidades ${jugador3.nombre}! eres el ganador`);
        if (jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1_Mesa de trabajo 1.png")';
        }
        else if (jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-05.png")';
        }
        else if(jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-03.png")';
        }
        else if(jugador3.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4_Mesa de trabajo 1.png")';
        }
    }
    if (nJugador === 4) {
        jugador4.victoria = 1;
        textoGanador.innerHTML = `¡Felicidades ${jugador4.nombre}! eres el ganador`;
        decir(`¡Felicidades ${jugador4.nombre}! eres el ganador`);
        if (jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 1/chico 1_Mesa de trabajo 1.png")';
        }
        else if (jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-05.png")';
        }
        else if(jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 2/chico 2-03.png")';
        }
        else if(jugador4.personaje == "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png") {
            personajeGanador.style.backgroundImage = 'url("../Imagenes/PERSONAJES/CHICO 4/chica 4_Mesa de trabajo 1.png")';
        }
    }
    if(numeroJugadores == 1) {
        await agregarDatosJugadores((jugador1.institucion).toLowerCase(), jugador1.grado, (jugador1.grupo).toLowerCase(), (jugador1.nombre).toLowerCase(), jugador1.victoria);
    }
    else if(numeroJugadores == 2) {
        await agregarDatosJugadores((jugador1.institucion).toLowerCase(), jugador1.grado, (jugador1.grupo).toLowerCase(), (jugador1.nombre).toLowerCase(), jugador1.victoria);
        await agregarDatosJugadores((jugador2.institucion).toLowerCase(), jugador2.grado, (jugador2.grupo).toLowerCase(), (jugador2.nombre).toLowerCase(), jugador2.victoria);
    }
    else if(numeroJugadores == 3) { 
        await agregarDatosJugadores((jugador1.institucion).toLowerCase(), jugador1.grado, (jugador1.grupo).toLowerCase(), (jugador1.nombre).toLowerCase(), jugador1.victoria);
        await agregarDatosJugadores((jugador2.institucion).toLowerCase(), jugador2.grado, (jugador2.grupo).toLowerCase(), (jugador2.nombre).toLowerCase(), jugador2.victoria);
        await agregarDatosJugadores((jugador3.institucion).toLowerCase(), jugador3.grado, (jugador3.grupo).toLowerCase(), (jugador3.nombre).toLowerCase(), jugador3.victoria);
    }
    else if(numeroJugadores == 4) { 
        await agregarDatosJugadores((jugador1.institucion).toLowerCase(), jugador1.grado, (jugador1.grupo).toLowerCase(), (jugador1.nombre).toLowerCase(), jugador1.victoria);
        await agregarDatosJugadores((jugador2.institucion).toLowerCase(), jugador2.grado, (jugador2.grupo).toLowerCase(), (jugador2.nombre).toLowerCase(), jugador2.victoria);
        await agregarDatosJugadores((jugador3.institucion).toLowerCase(), jugador3.grado, (jugador3.grupo).toLowerCase(), (jugador3.nombre).toLowerCase(), jugador3.victoria);
        await agregarDatosJugadores((jugador4.institucion).toLowerCase(), jugador4.grado, (jugador4.grupo).toLowerCase(), (jugador4.nombre).toLowerCase(), jugador4.victoria);
    }
}

dContinuar.addEventListener("click", () => {
    dJugador.innerHTML = "";
    dMostrar.innerHTML = "";
    mDado.classList.remove("modal-dado--show");
});

jugarI.addEventListener("click", (e) => {
    for (const rjugador of rJugadores) {
        if (rjugador.checked) {
            numeroJugadores = rjugador.value;
            break;
        }
    }
    pJugadores.classList.remove("jugadores--show");
    pPersonajes.classList.add("datos--show")
});

bSiguiente.addEventListener("click", () => {
    let institucion = institucionJugador.value;
    let grado = gradoJugador.value;
    let grupo = grupoJugador.value;
    let nombre = nombreJugador.value;
    if (institucion != "" && grado != "" && grupo != "" && nombre != "" && numPersonaje !== 0) {
        nJugador++;
        let personaje;
        for (const rPersonaje of rPersonajes) {
            if (rPersonaje.checked) {
                personaje = rPersonaje.value;
                break;
            }
        }
        if (nJugador === 1) {
            jugador1.institucion = institucion;
            jugador1.grado = grado;
            jugador1.grupo = grupo;
            jugador1.nombre = nombre;
            jugador1.personaje = personaje;
            tNumeroJugador.innerHTML = "Jugador 2";
            institucionJugador.value = "";
            gradoJugador.value = "";
            grupoJugador.value = "";
            nombreJugador.value = "";
            nombreJugador.ariaPlaceholder = "Tu nombre";
            turnoNombre.innerText = `Turno de ${jugador1.nombre}`;
            player1.style.backgroundImage = `url('${jugador1.personaje}')`;
        } else if (nJugador === 2) {
            jugador2.institucion = institucion;
            jugador2.grado = grado;
            jugador2.grupo = grupo;
            jugador2.nombre = nombre;
            jugador2.personaje = personaje;
            tNumeroJugador.innerHTML = "Jugador 3";
            institucionJugador.value = "";
            gradoJugador.value = "";
            grupoJugador.value = "";
            nombreJugador.value = "";
            nombreJugador.ariaPlaceholder = "Tu nombre";
            player2.style.backgroundImage = `url('${jugador2.personaje}')`;
        } else if (nJugador === 3) {
            jugador3.institucion = institucion;
            jugador3.grado = grado;
            jugador3.grupo = grupo;
            jugador3.nombre = nombre;
            jugador3.personaje = personaje;
            tNumeroJugador.innerHTML = "Jugador 4";
            institucionJugador.value = "";
            gradoJugador.value = "";
            grupoJugador.value = "";
            nombreJugador.value = "";
            nombreJugador.ariaPlaceholder = "Tu nombre";
            player3.style.backgroundImage = `url('${jugador3.personaje}')`;
        } else if (nJugador === 4) {
            jugador4.institucion = institucion;
            jugador4.grado = grado;
            jugador4.grupo = grupo;
            jugador4.nombre = nombre;
            jugador4.personaje = personaje;
            player4.style.backgroundImage = `url('${jugador4.personaje}')`;
        }
        if (nJugador == numeroJugadores) {
            pPersonajes.classList.remove("datos--show");
            pFondo.classList.add("fondo--show");
            nJugador = 1;
            decir(`Turno de ${jugador1.nombre}`);
        }
        if(numPersonaje === 1) {
            iChico1.classList.add("seleccionado");
            iChico1.classList.remove("seleccionado-temporal");
            iChico1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 1/chico 1-02.png");
            numPersonaje = 0;
        } 
        else if (numPersonaje === 2) {
            iChica1.classList.add("seleccionado");
            iChica1.classList.remove("seleccionado-temporal");
            iChica1.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 3/chica 3 todos-09.png");
            numPersonaje = 0;
        } 
        else if(numPersonaje === 3) {
            iChico2.classList.add("seleccionado");
            iChico2.classList.remove("seleccionado-temporal");
            iChico2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 2/chico 2-05.png");
            numPersonaje = 0;
        } 
        else if (numPersonaje === 4) {
            iChica2.classList.add("seleccionado");
            iChica2.classList.remove("seleccionado-temporal");
            iChica2.setAttribute("src", "../Imagenes/PERSONAJES/CHICO 4/chica 4-05.png");
            numPersonaje = 0;
        }
    }
    else {
        alert("Antes de continuar asegurate de llenar todos lo campos");
    }
});
