import * as arrays from "../EJ1/arrays.js";

class Disco {
    constructor(
        nombre,
        autor,
        año_publicacion,
        genero,
        ubicacion,
        prestado,
        caratula
    ) {
        this.nombre = nombre;
        this.autor = autor;
        this.año_publicacion = año_publicacion;
        this.genero = genero;
        this.ubicacion = 0;
        this.prestado = false;
        this.caratula = caratula;
    }

    /*set ubicacion (ubicacion) {
        this.ubicacion = ubicacion;
    }*/

    /*set prestado(prestado){
        this.prestado = prestado;
    }*/

    mostrarInfoDisco() {
        return `    
    Nombre: ${this.nombre}

    Autor: ${this.autor}

    Año de publicación: ${this.año_publicacion}

    Género: ${this.genero}

    Ubicación: ${this.ubicacion}

    Estado de préstamo: ${this.prestado}

    Carátula: ${this.caratula}      
    `;
    }
}

let listado_discos = [
    new Disco(
        "Thriller",
        "Michael Jackson",
        1982 - 11 - 29,
        "Pop",
        1,
        false,
        "thriller-cover.png"
    ),
    new Disco(
        "Back in Black",
        "AC/DC",
        1980 - 7 - 25,
        "Rock",
        2,
        true,
        "back_in_black-cover.jpg"
    ),
    new Disco(
        "The Bodyguard",
        "Whitney Houston",
        1992 - 11 - 17,
        "Pop",
        3,
        false,
        "the_bodyguard-cover.png"
    ),
];

let formulario = document.getElementById("formulario");

formulario.addEventListener("change", function () {
    let opciones_menu = document.getElementsByName("opciones-menu");
    opciones_menu.forEach((opcion) => {
        if (opcion.checked) {
            document.getElementsByClassName(opcion.value)[0].style.display = "block";
        } else {
            document.getElementsByClassName(opcion.value)[0].style.display = "none";
        }
        switch (opcion.value){

            case "mostrar-cantidad": {
                if (opcion.checked){
                    document.getElementById("cantidad-discos").innerHTML = `Hay ${arrays.mostrarTamano(listado_discos)} discos`;
                }
            }
            break;

            case "mostrar-tabla": {
                let opciones_consulta = document.getElementsByName("opciones-orden-tabla");
                opciones_consulta.forEach((opcion) => {
                    if (opcion.checked){
                        if (opcion.checked){
                        document.getElementsByClassName(opcion.value)[0].style.display = "block";
                        let tabla = document.getElementsById("tabla-ordenanda");
                        tabla.insertRow().insertCell().innerHTML = "";
                        
                        arrays.mostrarListado(listado_discos);
                    } else {
                        document.getElementsByClassName(opcion.value)[0].style.display = "none";
                    }
                    } 
                });
            }
            break;

            case "añadir-disco": {

            }
            break;

            case "eliminar-disco": {

            }
            break;
            case "consultar-disco": {
                let opciones_consulta = document.getElementsByName("consulta");
                opciones_consulta.forEach((opcion) => {
                    if (opcion.checked){
                        document.getElementsByClassName(opcion.value)[0].style.display = "block";
                    } else {
                        document.getElementsByClassName(opcion.value)[0].style.display = "none";
                    }
                });
            }
            break;
            
            
        }
    });
});

