const pi = Math.PI;
var radio;


function calcular_diametro() {
  return 2 * radio;
}

function calcular_perimetro_circunferencia() {
  return 2 * pi * radio;
}

function calcular_area_circulo() {
  return pi * Math.pow(radio, 2);
}

function calcular_area_esfera() {
  return 4 * pi * Math.pow(radio, 2);
}

function calcular_volumen_esfera() {
  return (4 / 3) * pi * Math.pow(radio, 3);
}
function principal() {
  radio = parseInt(document.getElementById("dato").value);
  document.getElementById("radio").innerHTML = radio + "cm";
  document.getElementById("diametro").innerHTML = calcular_diametro() + "cm";
  document.getElementById("perimetro-circunferencia").innerHTML =
    calcular_perimetro_circunferencia() + "cm";
  document.getElementById("area-circulo").innerHTML =
    calcular_area_circulo() + "cm2";
  document.getElementById("area-esfera").innerHTML =
    calcular_area_esfera() + "cm2";
  document.getElementById("volumen-esfera").innerHTML =
    calcular_volumen_esfera() + "cm3";
}