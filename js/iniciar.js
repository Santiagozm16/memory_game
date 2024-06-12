function limpiar_iniciar(){
    movimientos = 0;
    ganar = false;
    document.getElementById("mesa").style.display = "flex";
    document.getElementById("cabecera").style.display = "flex";
    document.querySelector(".bienvenida").style.display = "none";
    document.getElementById("movimientos").innerHTML = "00";
    document.getElementById("segundos").innerHTML = "00";
    document.getElementById("minutos").innerHTML = "00";
    document.querySelector(".gameover").style.display = "none";
    document.querySelector(".siguiente-nivel").style.display = "none";
    document.querySelector(".no-movimientos").style.display = "none";
    document.querySelector(".sin-Tiempo").style.display = "none";
    document.querySelector("#nivel").textContent = "0" + (nivelActual+1);
    segundos = niveles[nivelActual].segundos;
    minutos = niveles[nivelActual].minutos;
}

function iniciar(){
    if(practica === false){
        practica = false;
        limpiar_iniciar();
        agregarCartas(niveles[nivelActual].cartasTotales);
        if(niveles[nivelActual].maxMovimientos < 10){
            document.querySelector("#maxMovimientos").textContent = '0' + niveles[nivelActual].maxMovimientos;  
        }else{
            document.querySelector("#maxMovimientos").textContent = niveles[nivelActual].maxMovimientos;
        }
        var agregarClase = document.querySelectorAll(".tarjeta"); //Seleccionar todos los objetos de clase carta.
        agregarClase.forEach( function(carta){ //Recorre la lista de nodos capturada en la linea anterior, el parametro carta es el nodo individual separado de la lista de nodos.
            carta.addEventListener("click", destapar);
        });

        //Cargar en el HTML los segundos(texto) correspondientes

        if(niveles[nivelActual].segundos < 10){
            document.getElementById("segundos").textContent = '0'+ niveles[nivelActual].segundos;
        }else{
            document.getElementById("segundos").textContent = niveles[nivelActual].segundos;
        }

        if(niveles[nivelActual].minutos < 10){
            document.getElementById("minutos").textContent = '0'+ niveles[nivelActual].minutos;
        }else{
            document.getElementById("minutos").textContent = niveles[nivelActual].minutos; 
        }
        iniciarCronometro();
    }else{
        practica = true;
        limpiar_iniciar();
        agregarCartas(niveles[nivelActual].cartasTotales);
        if(niveles[nivelActual].maxMovimientos < 10){
            document.querySelector("#maxMovimientos").textContent = '0' + niveles[nivelActual].maxMovimientos;  
        }else{
            document.querySelector("#maxMovimientos").textContent = niveles[nivelActual].maxMovimientos;
        }
        var agregarClase = document.querySelectorAll(".tarjeta"); //Seleccionar todos los objetos de clase carta.
        agregarClase.forEach( function(carta){ //Recorre la lista de nodos capturada en la linea anterior, el parametro carta es el nodo individual separado de la lista de nodos.
            carta.addEventListener("click", destapar);
        }); 
    }
}

function reiniciar(){
    nivelActual = 0;
    practica = false;
    iniciar();
}

function regresar(){
    practica = false;
    ganar = true;
    nivelActual = 0;
    limpiar_iniciar();
    document.querySelector(".bienvenida").style.display = "flex";
    document.getElementById("mesa").style.display = "none";
    document.getElementById("cabecera").style.display = "none";
    document.getElementById("niveles").style.display = "none";
}

function cerrarMenu() {
    var menu = document.querySelector('.menu');
    menu.style.animation = "cerrarMenu 0.5s forwards";
}

