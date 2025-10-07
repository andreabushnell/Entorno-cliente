let contador = 0;

let intervalo = setInterval(() => {
  contador++;
  console.log("Mensaje número:", contador);

  // Detenemos después de 5 repeticiones
  if (contador === 5) {
    clearInterval(intervalo);
    console.log("Intervalo detenido");
  }
}, 2000);
