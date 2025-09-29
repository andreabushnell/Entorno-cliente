let opcion = prompt(
  "Escoge una opción:\n1. Potencia\n2. Raíz\n3. Redondeo\n4. Trigonometría"
);

var resp1;
var resp2;

let form = document.getElementById("form");

switch (opcion) {
  case "1":
    {
      document.getElementById("enunciado").innerHTML =
        "Introduce una base y un exponente:";
      document.getElementById("lbl2").style.display = "block";
      document.getElementById("dato2").style.display = "block";
      document.getElementById("lbl1").innerHTML = "Base:";
      document.getElementById("lbl2").innerHTML = "Exponente:";

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        

        resp1 = parseInt(document.getElementById("dato1").value);
        resp2 = parseInt(document.getElementById("dato2").value);

        let potencia = Math.pow(resp1, resp2);
        document.getElementById("resultado1").innerHTML =
          "La potencia de " + resp1 + " elevado a " + resp2 + " es " + potencia;
      });
    }
    break;
  case "2":
    {
      document.getElementById("enunciado").innerHTML =
        "Introduce un número positivo:";
      document.getElementById("lbl1").innerHTML = "Número:";
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        

        resp1 = parseInt(document.getElementById("dato1").value);

        let raiz = Math.sqrt(resp1);
        document.getElementById("resultado1").innerHTML =
          "La raíz de " + resp1 + " es " + raiz;
      });
    }
    break;
  case "3":
    {
      document.getElementById("enunciado").innerHTML = "Introduce un decimal:";
      document.getElementById("lbl1").innerHTML = "Decimal:";
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        

        resp1 = parseFloat(document.getElementById("dato1").value);

        let alta = Math.ceil(resp1);
        let baja = Math.floor(resp1);

        document.getElementById("resultado2").style.display = "block";

        document.getElementById("resultado1").innerHTML =
          "Redondeo al alza: " + alta;
        document.getElementById("resultado2").innerHTML =
          "Redondeo a la baja: " + baja;
      });
    }
    break;
  case "4":
    {
      document.getElementById("enunciado").innerHTML =
        "Introduce un ángulo entre 0 y 360:";
      document.getElementById("lbl1").innerHTML = "Ángulo:";
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        

        resp1 = parseInt(document.getElementById("dato1").value);

        let seno = Math.sin(resp1);
        let coseno = Math.cos(resp1);
        let tangente = Math.tan(resp1);

        document.getElementById("resultado2").style.display = "block";
        document.getElementById("resultado3").style.display = "block";

        document.getElementById("resultado1").innerHTML = "Seno: " + seno;
        document.getElementById("resultado2").innerHTML = "Coseno: " + coseno;
        document.getElementById("resultado3").innerHTML =
          "Tangente: " + tangente;
      });
    }
    break;
  default:
    alert("Respuesta inválida");
}
