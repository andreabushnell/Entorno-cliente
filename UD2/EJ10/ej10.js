/*Solución 1*/
let respuesta1 = (prompt("Introducir nombre: ")).toUpperCase();

if (respuesta1=="LUISA" || respuesta1=="MARIA" || respuesta1=="CARLOTA" || 
    respuesta1=="ANA" || respuesta1=="MARTINA" || respuesta1=="CLAUDIA"){
    alert("Estás convocada");
} else alert("No estás convocada");

/*Solución 2 usando array*/
let respuesta2 = (prompt("Introducir nombre: ")).toUpperCase();
let lista = ["LUISA", "MARIA", "CARLOTA", "ANA", "MARTINA", "CLAUDIA"];

if (lista.includes(respuesta2)){
    alert ("Estás convocada");
} else alert("No estás convocada");
