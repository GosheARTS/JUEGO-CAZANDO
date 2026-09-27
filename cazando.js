let cmpCanvas = document.getElementById("areaJuego");
let contexto = cmpCanvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

let movimientos = 25;

let puntaje = 0;
let tiempo = 20;
let intervalo;

const ALTO_GATO = 60;
const ANCHO_GATO = 60;
const ALTO_COMIDA = 30;
const ANCHO_COMIDA = 30;

function iniciarJuego(){
    gatoX = (cmpCanvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (cmpCanvas.height / 2) - (ALTO_GATO / 2);
    comidaX = generarRandom(0, cmpCanvas.width - ANCHO_COMIDA);
    comidaY = generarRandom(0, cmpCanvas.height - ALTO_COMIDA);
    graficarGato();
    graficarComida();
    actualizarPantalla();
    intervalo = setInterval(restarTiempo, 1000);
}

function reiniciar(){
    puntaje=0;
    tiempo=20;
    mostrarEnSpan("txtPuntaje", puntaje);
    mostrarEnSpan("txtTiempo", tiempo);

    clearInterval(intervalo);
    iniciarJuego();
}

function restarTiempo(){
    tiempo = tiempo - 1;
    mostrarEnSpan("txtTiempo", tiempo);
    if(tiempo == 0){
        alert("GAME OVER");
        clearInterval(intervalo);
        reiniciar();
    }
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

    if(puntaje == 10){
        alert("Conseguiste la comida, ahora tu gato crecera. ");
        clearInterval(intervalo);
        reiniciar();
        }
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