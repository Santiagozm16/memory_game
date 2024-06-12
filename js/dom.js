//Acciones Botones

document.getElementById("iniciar").addEventListener("click", function(){
    var cronometroDisplay = document.querySelector(".cronometro"); //Captura la clase cronometro
    cronometroDisplay = getComputedStyle(cronometroDisplay); //Extra las caracteristicas CSS
    if(cronometroDisplay.display == "block"){ //Compara si el .display es igual a block
        iniciar();   //Ejecuta
    }else{
        document.querySelector(".cronometro").style.display = "block";
        //cronometroDisplay.style.display = "block"; //De estar desactivado lo activa
        iniciar();
    }
});

document.getElementById("practica").addEventListener("click", function(){
    practica = true;
    iniciar();
    document.getElementById("niveles").style.display = "block"; //Agrega el boton que despliega el menu de niveles
    document.querySelector(".cronometro").style.display = "none"; // Elimina cronometro
});

document.getElementById("siguiente").addEventListener("click", iniciar);

document.querySelectorAll('[id="reiniciar"]').forEach(function(boton){ //con el parametro '[id="reiniciar"]' traigo un array de todos los objetos que tiene por ID = reiniciar, es una mala practica ya que la ID es irrepetible
    boton.addEventListener("click", reiniciar);
});


document.querySelectorAll('[id="regresar"]').forEach(function(boton){ //con el parametro '[id="regresar"]' traigo un array de todos los objetos que tiene por ID = regresar, es una mala practica ya que la ID es irrepetible
    boton.addEventListener("click", regresar);
});

document.getElementById('niveles').addEventListener("click", function(){
    var menu = document.querySelector('.menu');
    var menu2 = getComputedStyle(menu);
    if (menu2.display === "none") {
        menu.style.animation = "desplegarMenu 0.5s forwards";
        menu.style.display = "block";
    } else {
        menu.style.animation = "cerrarMenu 0.5s forwards";  
    }
});

////////////////////////////////////////////////////////////////

//Evento para cerrar con 'Esc' el Menu
document.addEventListener("keydown", function(evento){
    if(evento.key === 'Escape' && practica === true){
        var menu = document.querySelector('.menu');
        var menu2 = getComputedStyle(menu);
        if (menu2.display != "none") {
            cerrarMenu();
        }  
    }
});

//Cerrar al hacer click fuera de Menu
document.querySelector('html').addEventListener("click", function(evento){
    if(evento.target.closest('.menu') || evento.target.id == 'niveles'){ //El metodo closest se utiliza para buscar el ancestro más cercano que coincide con el selector dado
        return;
    }else{
        cerrarMenu();
    }
})

//Acciones en Menu nivel 1
document.getElementById('nivel-1').addEventListener("click", function(){
    cerrarMenu();
    nivelActual = document.getElementById('nivel-1').dataset.nivel;
    nivelActual = parseInt(nivelActual, 10);
    iniciar();  
});
//Acciones en Menu nivel 2
document.getElementById('nivel-2').addEventListener("click", function(){
    cerrarMenu();
    nivelActual = document.getElementById('nivel-2').dataset.nivel;
    nivelActual = parseInt(nivelActual, 10);
    iniciar();    
});
//Acciones en Menu nivel 3
document.getElementById('nivel-3').addEventListener("click", function(){
    cerrarMenu();
    nivelActual = document.getElementById('nivel-3').dataset.nivel;
    nivelActual = parseInt(nivelActual, 10);
    iniciar();    
});
//Acciones en Menu nivel 4
document.getElementById('nivel-4').addEventListener("click", function(){
    cerrarMenu();
    nivelActual = document.getElementById('nivel-4').dataset.nivel;
    nivelActual = parseInt(nivelActual, 10);
    iniciar();    
});