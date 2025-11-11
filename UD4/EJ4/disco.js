import * as arrays from "../EJ1/arrays.js";

class Disco {
    constructor(nombre, autor, año_publicacion, genero) {
        this.nombre = nombre;
        this.autor = autor;
        this.año_publicacion = año_publicacion;
        this.genero = genero;
        this.ubicacion = 0;
        this.prestado = false;
        this.caratula = "imagen.png";
    }

    set ubicacion (ubicacion) {
        this.ubicacion = ubicacion;
    }

    set prestado (prestado){
        this.prestado = prestado;
    }

    mostrarInfoDisco() {
        return `    
    Nombre: ${this.nombre}

    Autor: ${this.autor}

    Año de publicación: ${this.año_publicacion}

    Género: ${this.genero}

    Carátula: ${this.caratula}  

    `;
    }
}

let listado_discos = [];

function mostrarNumDiscos () {

}
function mostrarTablaDiscso() {

}
function mostrarIntervalodDiscos(incio, fin) {

}
function añadirDisco() {
    if(selection = principio) {

    } else {

    }
}
function borrarDisco() {
    if(selection = principio) {

    } else {
        
    }
}
function consultarDisco() {
    if(selection = posicion) {

    } else {
        
    }
}