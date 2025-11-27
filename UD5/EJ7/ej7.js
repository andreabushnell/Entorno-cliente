function validarFormulario() {
    let cadenaErrores = "";

    let regexFecha = "[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}";
    let regexEmpleado = "[A-Z]{2}[^(0-9A-Za-z)]{1}[0-9]{4}";
    let regexDestinatario = "[A-Z]{2,3}_[A-Z]{1}[a-z]{1,}:[0-9]{4}";
    let regexNumero = "ES[0-9]{20}";

    let fecha = document.getElementById("fecha").value;
    if (fecha == "") {
        cadenaErrores += "Falta fecha. ";
    } else if (!fecha.match(regexFecha)) {
        cadenaErrores += "Formato de fecha incorrecto. ";
    }

    let empleado = document.getElementById("empleado").value;
    if (empleado == "") {
        cadenaErrores += "Falta empleado. ";
    } else if (!empleado.match(regexEmpleado)) {
        cadenaErrores += "Formato de empleado incorrecto. ";
    }

    let destinatario = document.getElementById("destinatario").value;
    if (destinatario == "") {
        cadenaErrores += "Falta destinatario. ";
    } else if (!destinatario.match(regexDestinatario)) {
        cadenaErrores += "Formato de destinatario incorrecto. ";
    }

    let peso = document.getElementById("peso").value;
    if (peso == "") {
        cadenaErrores += "Falta peso. ";
    } 

    let numero = document.getElementById("numero").value;
    if (numero == "") {
        cadenaErrores += "Falta número de cuenta. ";
    } else if (!numero.match(regexNumero)) {
        cadenaErrores += "Formato de número de cuenta incorrecto. ";
    }

    if (cadenaErrores==""){
        document.getElementById("mensaje").innerHTML = "Formulario correcto.";
    } else {
        document.getElementById("mensaje").innerHTML = cadenaErrores;
    }
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    validarFormulario();
});
