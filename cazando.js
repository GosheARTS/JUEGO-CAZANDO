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

function graficarGato(){
    contexto.fillStyle = "#f16d30";
    contexto.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}
function graficarComida(){
    contexto.fillStyle = "#523734";
    contexto.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}
function iniciarJuego(){
    gatoX = (cmpCanvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (cmpCanvas.height / 2) - (ALTO_GATO / 2);
    comidaX = cmpCanvas.width - ANCHO_COMIDA;
    comidaY = cmpCanvas.height - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}