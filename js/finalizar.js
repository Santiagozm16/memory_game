function finalizar(){
    var feedback = document.querySelector(".gameover");
    setTimeout(function(){
        feedback.style.display = 'flex';
        //console.log(feedback);
    },1000);
}

function noMovimientos(){
    if(practica === false){
        var feedback = document.querySelector(".no-movimientos");
        setTimeout(function(){
            feedback.style.display = 'flex';
            //console.log(feedback);
        },1000);
    }
}

function sinTiempo(){
    if(practica === false){
        var feedback = document.querySelector(".sin-Tiempo");
        feedback.style.display = 'flex';
    }
}