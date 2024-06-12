function actualizarNivel() {
    nivelActual = nivelActual + 1;
    var nivelMostrar = nivelActual +1;
    var textoNivel;
    if(nivelActual > 9){
        textoNivel = nivelActual;
    }else{
        textoNivel = '0' + nivelActual;
    }
//Mostrar Pantalla
    var siguiente_nivel = document.querySelector(".siguiente-nivel");
    setTimeout(function(){
        siguiente_nivel.style.display = 'flex';
        document.querySelector("#nivel").innerHTML = nivelMostrar;
    },1000);
}