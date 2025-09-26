let respuesta = prompt(
  "Elige una opción: \n1. Potencia\n2. Raíz\n3. Redondeo\n4. Trigonometría"
);

function submit() {
  document.getElementById("responder").addEventListener("click", function () {
    let resp1 = document.getElementById("dato1").innerHTML;
    if (document.getElementById("dato2").style.display != "none") {
      let resp2 = document.getElementById("dato2").innerHTML;
    }
  });
}

switch (parseInt(respuesta)) {
  case 1: {
    document.getElementById("enunciado").innerHTML =
      "Introduce una base y un exponente:";
    document.getElementById("lbl1").innerHTML = "Base:";
    document.getElementById("lbl2").style.display = "block";
    document.getElementById("lbl2").innerHTML = "Exponente:";
  }
  case 2: {
    document.getElementById("enunciado").innerHTML =
      "Introduce un número positivo:";
    document.getElementById("lbl1").innerHTML = "Número:";
  }
  case 3: {
    document.getElementById("enunciado").innerHTML = "Introduce un decimal:";
    document.getElementById("lbl1").innerHTML = "Decimal:";
  }
  case 4: {
    document.getElementById("enunciado").innerHTML =
      "Introduce un ángulo entre 0 y 360:";
    document.getElementById("lbl1").innerHTML = "Ángulo:";
  }
}
