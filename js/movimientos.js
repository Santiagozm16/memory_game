function actualizarMovimientos(){
    if(movimientos > 9){
        document.getElementById("movimientos").innerHTML = movimientos;
    } else {
        document.getElementById("movimientos").innerHTML = '0' + movimientos;
    }
}
