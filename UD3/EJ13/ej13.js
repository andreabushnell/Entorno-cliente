var ventana;

function crear(){
    ventana = window.open("","","width=500,height=200");
    ventana.outerHeight=200;
    ventana.outerWidth=500;
    ventana.document.write("<h1>Mi ventana</h1>");

    let ventana_origen = ventana.opener;
    let intervaloIda = setInterval(()=>{
        ventana.moveBy(10,10);
        if(ventana.screenX==ventana_origen.outerWidth){
            ventana.moveBy(-10,-10);
        } else if (ventana.screenX==0) {
            clearInterval(intervaloIda);
        }
    },100);
    let intervaloVuelta = setInterval(()=>{
        ventana.moveBy(-10,-10);
        if (ventana.screenX==0 && ventana.screenY==0) {
            clearInterval(intervaloVuelta);
        }
    },100);
}

function parar(){
    ventana.stop();
}

function borrar(){
    ventana.close();
}
