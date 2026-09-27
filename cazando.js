let cmpCanvas = document.getElementById("areaJuego");
let contexto = cmpCanvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

let movimientos = 20;

let puntaje = 0;

const ALTO_GATO = 60;
const ANCHO_GATO = 60;
const ALTO_COMIDA = 30;
const ANCHO_COMIDA = 30;

function iniciarJuego(){
    gatoX = (cmpCanvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (cmpCanvas.height / 2) - (ALTO_GATO / 2);
    comidaX = cmpCanvas.width - ANCHO_COMIDA;
    comidaY = cmpCanvas.height - ALTO_COMIDA;
    graficarGato();
    graficarComida();
    actualizarPantalla();
}

function limpiarCanva(){
    contexto.clearRect(0, 0, cmpCanvas.width, cmpCanvas.height);
}

function detectarColision(){
    if(gatoX < comidaX + ANCHO_COMIDA &&
       gatoX + ANCHO_GATO > comidaX &&
       gatoY < comidaY + ALTO_COMIDA &&
       gatoY + ALTO_GATO > comidaY){

        comidaX = generarRandom(0, cmpCanvas.width - ANCHO_COMIDA);
        comidaY = generarRandom(0, cmpCanvas.height - ALTO_COMIDA);
        actualizarPantalla();

        puntaje = puntaje + 1;
        mostrarEnSpan("txtPuntaje", puntaje);
    }
}

function graficarGato(){
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "#f16d30");
}

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#523734");
}

function moverIzquierda(){
    gatoX = gatoX - movimientos;
    actualizarPantalla();
}

function moverDerecha(){
    gatoX = gatoX + movimientos;
    actualizarPantalla();
}

function moverArriba(){
    gatoY = gatoY - movimientos;
    actualizarPantalla();
}

function moverAbajo(){
    gatoY = gatoY + movimientos;
    actualizarPantalla();
}