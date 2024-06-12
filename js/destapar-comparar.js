function destapar(){
    var destapadasTotal = document.querySelectorAll(".destapada:not(.acertada)");
    var cartasDescubiertas;

    if (destapadasTotal.length > 1){ //Este if hace un stop para que no se sigan destapando mas de 2 cartas
        return; //La función se cierra al destapar 2 cartas
    }

    this.classList.add("destapada"); //Agrega la clase destapar
    
    document.querySelector("#sonido-carta").cloneNode().play(); //Reproduce sonido de destapar una carta.

    cartasDescubiertas = document.querySelectorAll(".destapada:not(.acertada)");
    if (cartasDescubiertas.length < 2 ){ //Si no tengo 2 cartas descubiertas para conmparar se cierra la funcion;
        return;
    }

    /*
    COMPARACIÓN ACCEDIENDO AL VALOR DE TEXTO DEL NODO CAPTURADO.
    if(cartasDescubiertas[0].textContent === cartasDescubiertas[1].textContent){ 
        console.log("acierto");
    }else{
        console.log("error");
    }*/
    comparar(cartasDescubiertas);
    var cartasRestantes = document.querySelectorAll(".tarjeta:not(.acertada)");
    if (cartasRestantes.length === 0){
        //ganar = true; // esto sera cuando nivelActual > 4
         //esto sera cuando nivelActual > 4
        if(nivelActual < 3){
            actualizarNivel();
            ganar = true;
        }else{
            finalizar();
            ganar = true;
        }  
    }
}

function comparar(cartasDescubiertas){
    movimientos++;
    if(movimientos > niveles[nivelActual].maxMovimientos){
        noMovimientos();
        ganar = true;
    }
    actualizarMovimientos();
    if(cartasDescubiertas[0].dataset.valor === cartasDescubiertas[1].dataset.valor){ 
        acertada(cartasDescubiertas);
    }else{
        noAcierto(cartasDescubiertas);
    }
}