import * as arrays from "./arrays.js";

var listadoPaises = [
    "España",
    "Francia",
    "Alemania",
    "Reino Unido",
    "Italia",
    "Portugal",
    "Holanda",
    "Argentina",
    "Brasil",
];

document.getElementById("mostrar-n-paises").addEventListener("click", function () {
        document.getElementById("n-paises").innerHTML = arrays.mostrarTamano(listadoPaises);
    });

document.getElementById("mostrar-listado").addEventListener("click", function () {
        document.getElementById("listado-paises").innerHTML = arrays.mostrarListado(listadoPaises); 
    });

document.getElementById("mostrar-listado-inverso").addEventListener("click", function () {
        document.getElementById("listado-paises").innerHTML = arrays.mostrarListadoInverso(listadoPaises); 
    });

document.getElementById("mostrar-orden-alfabeto").addEventListener("click", function () {
        document.getElementById("listado-paises").innerHTML = arrays.mostrarListadoAlfabetico(listadoPaises); 
    });

document.getElementById("añadir-pais-principio").addEventListener("click", function () {
        arrays.añadirPaisPrincipio();
    });

document.getElementById("añadir-pais-final").addEventListener("click", function () {
        arrays.añadirPaisFinal();
    });

document.getElementById("eliminar-pais-principio").addEventListener("click", function () {
        arrays.eliminarPaisFinal();
    });

document.getElementById("eliminar-pais-final").addEventListener("click", function () {
        arrays.eliminarPaisPrincipio();
    });

document.getElementById("consultar-pais-nombre").addEventListener("click", function () {
    let nombre = document.getElementById("nombre-o-numero").value;
        document.getElementById("detalle-pais").innerHTML = arrays.mostrarPorNombre(listadoPaises, nombre); 
    });

document.getElementById("consultar-pais-posicion").addEventListener("click", function () {
    let posicion = document.getElementById("nombre-o-numero").value;
        document.getElementById("detalle-pais").innerHTML = arrays.mostrarPorNombre(listadoPaises, parseInt(posicion)); 
    });
