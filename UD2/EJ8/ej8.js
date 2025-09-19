let x = true;
let pregunta = "¿Cuál fue el primer presidente de la democracia española?";
let respuesta = prompt(pregunta).toUpperCase();

while (x) {
    if (respuesta != "ADOLFO SUAREZ" && respuesta != "ADOLFO SUÁREZ") {
        if (respuesta == "ADOLFO"){
            respuesta = prompt("Te falta el apellido "+pregunta).toUpperCase();
        } else if (respuesta == "SUAREZ" || respuesta == "SUÁREZ"){
            respuesta = prompt("Te falta el nombre "+pregunta).toUpperCase();
        } else respuesta = prompt("ERROR. Inténtelo de nuevo "+pregunta).toUpperCase();
    } else x = false;
}