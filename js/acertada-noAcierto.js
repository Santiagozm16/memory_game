function acertada(cartasDescubiertas){
    cartasDescubiertas.forEach(function(carta){
        document.querySelector("#sonido-acierto").cloneNode().play(); //Ejecuta el sonido del acierto
        carta.classList.add("acertada"); //agrega la clase acertada a la tarjeta destapada
        carta.querySelector(".tarjeta--contenido").style.opacity = 0.7; //Agrega opacidad al emoji para decir que la carta queda inactiva
    })
}

function noAcierto(cartasDescubiertas){
    document.querySelector("#sonido-error").cloneNode().play(); //Reproduce sonido de error
    cartasDescubiertas.forEach(function (carta){ 
        carta.classList.add("error");
    });
        //Permite una Pausa de 0.8 segundos donde las 2 cartas estan destapadas y luego se vuelven a tapar.
    setTimeout(function() {
        // Aquí va el código que quieres ejecutar después de la pausa
            //Remueve las clases destapada de las tarjeta.
            cartasDescubiertas[0].classList.remove("destapada");
            cartasDescubiertas[1].classList.remove("destapada");
            cartasDescubiertas[0].classList.remove("error");
            cartasDescubiertas[1].classList.remove("error");
        }, 800);
}