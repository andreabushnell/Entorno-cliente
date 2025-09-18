let x = true;

let respuesta = (prompt("¿Cuál fue el primer presidente de la democracia española?")).toUpperCase();
let partes = respuesta.split(" ");

while (x) {
    
    if (respuesta != "ADOLFO SUAREZ" || respuesta != "ADOLFO SUÁREZ") {
        if (partes.length==1){
            if (partes[1]=="ADOLFO"){
                respuesta = (prompt("Te falta el apellido ¿Cuál fue el primer presidente de la democracia española?")).toUpperCase();
            } else if (partes[1]=="SUAREZ" || partes[1]=="SUÁREZ"){
                respuesta = (prompt("Te falta el nombre ¿Cuál fue el primer presidente de la democracia española?")).toUpperCase();
            }
        }
        else if (partes.length==2){
            respuesta = (prompt("ERROR. Inténtelo de nuevo ¿Cuál fue el primer presidente de la democracia española?")).toUpperCase();
            partes = respuesta.split(" ");
        }
    } else x = false;
}