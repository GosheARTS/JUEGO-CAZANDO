function graficarRectangulo(x, y, ancho, alto, color){
    contexto.fillStyle = color;
    contexto.fillRect(x, y, ancho, alto);
}

function generarRandom(min,max){
    let random=Math.random();
    let numero=random*(max-min);
    let numeroEntero=Math.ceil(numero);
    numeroEntero=numeroEntero+min;
    return numeroEntero;
}

function mostrarEnSpan(idSpan,valor){
    let componente=document.getElementById(idSpan);
    componente.textContent=valor;
}

function actualizarPantalla(){
    limpiarCanva();
    graficarGato();
    graficarComida();
}