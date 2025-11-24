function validarFormulario(){
    let cadenaErrores = "";

    let regexFecha;
    let regexEmpleado;
    let regexDestinatario;
    let regexNumero;

    let fecha = document.getElementById('fecha').value;
    if(fecha==""){
        cadenaErrores += "Falta fecha. ";
    } else if (!fecha.match()){

    }


    let empleado = document.getElementById('empleado').value;
    if(empleado==""){
        cadenaErrores += "Falta empleado. ";
    }


    let destinatario = document.getElementById('destinatario').value;
    if(destinatario==""){
        cadenaErrores += "Falta destinatario. ";
    }


    let peso = document.getElementById('peso').value;
    if(peso==""){
        cadenaErrores += "Falta peso. ";
    }


    let numero = document.getElementById('numero').value;
    if(numero==""){
        cadenaErrores += "Falta número de cuenta. ";
    }


}



document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    validarFormulario();
});
