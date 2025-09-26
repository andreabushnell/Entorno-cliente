let dia = prompt("Introduce el día: ");
let mes = prompt("Introduce el mes: ");

var cont = 0;
const domingos = [];
const fechaActual = new Date();
let ano = fechaActual.getFullYear();

function domingosCumple(dia, mes) {
  let cumple = new Date(ano, mes, dia);
  while (ano < 2100) {
    if (cumple.getDay() == 0) {
      domingos.push(cumple.getFullYear());
    }
    cumple = new Date(ano, mes, dia);
    ano++;
  }
}

domingosCumple(dia, mes);

document.getElementById("resultado").innerHTML += domingos.toString();


