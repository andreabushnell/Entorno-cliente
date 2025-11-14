import * as arrays from "../EJ1/arrays.js";

class Disco {
    constructor(nombre, autor, año, genero) {
        this.nombre = nombre;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
        this.ubicacion = 0;
        this.prestado = false;
        this.caratula = "imagen.png";
    }

    mostrarInfoDisco() {
        return `    
    Nombre: ${this.nombre}

    Autor: ${this.autor}

    Año de publicación: ${this.año}

    Género: ${this.genero} 

    `;
    }
}

let listado_discos = [];
listado_discos.push(new Disco("disco1", "autor1", 1960, "genero1"));
listado_discos.push(new Disco("disco2", "autor2", 1965, "genero2"));

function mostrarNumDiscos() {
    document.getElementById(
        "mensaje-num-discos"
    ).innerHTML = `Hay ${arrays.mostrarTamano(listado_discos)} discos`;
}
function mostrarTablaDiscos() {
    document.getElementById("tabla-discos").innerHTML = "";
    let tabla = document.getElementById("tabla-discos");
    let lista = [];

    if (document.getElementById("en-orden").checked) {
        lista = arrays.mostrarListado(listado_discos);
    } else if (document.getElementById("inverso").checked) {
        lista = arrays.mostrarListadoInverso(listado_discos);
    } else if (document.getElementById("alfabetico").checked) {
        lista = arrays.mostrarListadoAlfabetico(listado_discos);
    }

    if (lista.length != 0) {
        document.getElementById("tabla-discos").style.display = "block";

        lista.forEach((disco) => {
            let row = tabla.insertRow(0);
            let cell = row.insertCell(0);
            cell.innerHTML = disco.mostrarInfoDisco();
        });
    } else {
        alert("Debes elegir un orden para mostrar la tabla");
    }
}
function mostrarIntervaloDiscos() {
    let intervalo = document.getElementById("intervalo").value;
    let arrIntervalo = intervalo.split("-");
    let inicio = parseInt(arrIntervalo[0]);
    let fin = parseInt(arrIntervalo[1]);
    let discosAMostrar = [];

    listado_discos.forEach((disco) => {
        if (disco.año >= inicio && disco.año <= fin) {
            discosAMostrar.push(disco);
        }
    });
    discosAMostrar.forEach((disco) => {
        document.getElementById("mensaje-mostrar-intervalo").innerHTML +=
            disco.mostrarInfoDisco() + "<br>";
    });
}
function añadirPrincipipo() {
    let nombre = document.getElementById("nombre-disco");
    let artista = document.getElementById("artista-disco");
    let año = document.getElementById("año-disco");
    let genero = document.getElementById("genero-disco");

    arrays.añadirPrincipio(
        listado_discos,
        new Disco(nombre, artista, año, genero)
    );  

    document.getElementById("mensaje-adicion").innerHTML = `Se ha añadido el disco ${nombre} al principio de la lista.`;
}
function añadirFinal() {
    let nombre = document.getElementById("nombre-disco");
    let artista = document.getElementById("artista-disco");
    let año = document.getElementById("año-disco");
    let genero = document.getElementById("genero-disco");

    arrays.añadirFinal(
        listado_discos,
        new Disco(nombre, artista, año, genero)
    );  

    document.getElementById("mensaje-adicion").innerHTML = `Se ha añadido el disco ${nombre} al final de la lista.`;
}
function eliminarPrincipio() {
    arrays.eliminarPrincipio(listado_discos);
    document.getElementById("mensaje-eliminacion").innerHTML = `Se ha eliminado el primer disco de la lista.`;
}
function eliminarFinal() {
    arrays.eliminarFinal(listado_discos);
    document.getElementById("mensaje-eliminacion").innerHTML = `Se ha eliminado el último disco de la lista.`;
}
function consultarPosicion() {
    let posicion = document.getElementById("posicion").value;
    let disco = arrays.mostrarPorPosicion(listado_discos, posicion);

    if (disco != null) {
        document.getElementById(
            "mensaje-consulta"
        ).innerHTML = `El disco en la posición ${posicion} es ${disco.nombre}`;
    } else {
        document.getElementById(
            "mensaje-consulta"
        ).innerHTML = `No hay ningún disco en la posición ${posicion}`;
    }
}
function consultarNombre() {
    let nombre = document.getElementById("nombre").value;
    let buscador = new Disco(nombre, "", 0, "");
    let posicion = arrays.mostrarPorNombre(listado_discos, buscador);

    if (posicion != 0) {
        document.getElementById(
            "mensaje-consulta"
        ).innerHTML = `El disco ${nombre} está en la posición ${posicion}`;
    } else {
        document.getElementById(
            "mensaje-consulta"
        ).innerHTML = `El disco ${nombre} no está en la lista`;
    }
}

//Mostrar número de discos
document
    .getElementById("mostrar-nDiscos")
    .addEventListener("click", mostrarNumDiscos);
//Mostar tabla de discos
document
    .getElementById("mostrar-tablaDiscos")
    .addEventListener("click", mostrarTablaDiscos);
//Mostrar discos en un intervalo de años
document
    .getElementById("mostrar-intervalo")
    .addEventListener("click", mostrarIntervaloDiscos);
//Añadir un disco al principio
document
    .getElementById("añadir-principio")
    .addEventListener("click", añadirPrincipipo);
//Añadir un disco al final
document.getElementById("añadir-final").addEventListener("click", añadirFinal);
//Eliminar un disco al principio
document
    .getElementById("eliminar-principio")
    .addEventListener("click", eliminarPrincipio);
//Eliminar un disco al final
document
    .getElementById("eliminar-final")
    .addEventListener("click", eliminarFinal);
//Consultar por posición
document
    .getElementById("consultar-posicion")
    .addEventListener("click", consultarPosicion);
//Consultar por nombre
document
    .getElementById("consultar-nombre")
    .addEventListener("click", consultarNombre);
