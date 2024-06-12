function iniciarCronometro(){
    var textoSegundos;
    var textoMinutos;
    var intervaloCronometro;
    
    function actualizarCronometro(){
        if(ganar === true){
             //Cuando se gana la variable cambia a true y aqui se hace el cierre de la función
             clearInterval(intervaloCronometro);
             segundos = 0;
             minutos = 0;
             return;
        }
        //segundos = segundos - 1;
        if(segundos === 0){
            if(segundos == 0){
                if(minutos > 0){
                    minutos = minutos - 1;
                    segundos = 59;
                }
            }
        }else {
            segundos = segundos - 1;
        }

        if(segundos < 10){
            textoSegundos = '0' + segundos;
        }else{
            textoSegundos = segundos;
        }
    
        if(minutos <  10){
            textoMinutos = '0' + minutos;   
        }else{
            textoMinutos = minutos;
        }

        document.getElementById("segundos").innerHTML =  textoSegundos; 
        document.getElementById("minutos").innerHTML = textoMinutos;

        if(minutos === 0 && segundos === 0){
            sinTiempo();
            clearInterval(intervaloCronometro);
            return;
        }
    }

    intervaloCronometro = setInterval(actualizarCronometro,1000); //Repite la funcion actualizarCronometro cada segundo
}