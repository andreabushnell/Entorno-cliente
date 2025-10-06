var ventana;

function crear(){
    ventana = window.open("","","width=500,height=200");
    ventana.document.write("<h1>Mi ventana</h1>")
}

function parar(){
    ventana.stop();
}

function borrar(){
    ventana.close();
}

function moverVentana(){
    while(ventana.open()){
        ventana.moveBy(10,10);
    }
}
