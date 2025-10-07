var ventana;

function crear(){
    ventana = window.open("","","width=500,height=200");
    ventana.outerHeight=200;
    ventana.outerWidth=500;

    let intervaloIda = setInterval(()=>{
        ventana.moveBy(10,10);
        if (ventana.screenY==(window.innerHeight-ventana.outerHeight+5)) {
            clearInterval(intervaloIda);
        }
    },10);

    let intervaloVuelta = setInterval(()=>{
        ventana.moveBy(-10,-10);
        if (ventana.screenX==0) {
            clearInterval(intervaloVuelta);
        }
    },10);
}

function parar(){
    ventana.stop();
}

function borrar(){
    ventana.close();
}
