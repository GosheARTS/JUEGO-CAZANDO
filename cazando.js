let cmpCanvas = document.getElementById("areaJuego");
let contexto = cmpCanvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

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
        alert("Comidita mmm");
    }
}

function graficarGato(){
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "#f16d30");
}

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#523734");
}

function moverIzquierda(){
    gatoX = gatoX - 10;
    actualizarPantalla();
}

function moverDerecha(){
    gatoX = gatoX + 10;
    actualizarPantalla();
}

function moverArriba(){
    gatoY = gatoY - 10;
    actualizarPantalla();
}

function moverAbajo(){
    gatoY = gatoY + 10;
    actualizarPantalla();
}