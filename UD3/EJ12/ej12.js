var miVentana = window.open("","","width=200,height=200");
var contador = 0;

var intervalo = setInterval(() => {
  contador++;
  if (contador == 1) {
    clearInterval(intervalo);
    miVentana.close();
  }
}, 3000);
