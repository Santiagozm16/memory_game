function agregarCartas(cartasSimples){
    var mesa = document.querySelector("#mesa");
    cartasSimples = cartasSimples.concat(cartasSimples);
    var cartasBarajadas = barajar(cartasSimples);
    mesa.innerHTML = "";
    cartasBarajadas.forEach(function(emoji){
        var tarjeta = document.createElement("div"); //Agregar estructura HTML con cada carta
        tarjeta.innerHTML =
        "<div class='tarjeta' data-valor="+ emoji +">" + //Data-valor es un atributo personalizado
        "<div class='tarjeta--contenido'>" + emoji +"</div></div>";
        mesa.appendChild(tarjeta);
    })
}

function barajar(cartasCompletas){
    var resultado = cartasCompletas; //Resultado no modifica la baraja original
    resultado.sort(function(){ //.sort ordena de A a Z los valores del arreglo, la función anonima provera un numero aleatorio que .sort organizara.
        var index = 0.5 - Math.random(); // Generar un numero random
        return index; // Devolvemos el numero randome para que .sort lo organice para el arreglo
    });
    return resultado; //Se retorna la baraja barajada
}