let x = true;

//while message incorrect, continue to ask

while (x) {
    let respuesta = (prompt("Introduce el nombre del primer presidente de la democracia: ")).toUpperCase();
    if (respuesta == "ADOLFO SUAREZ" || respuesta == "ADOLFO SUÁREZ") {
        x = false;
    } 
}