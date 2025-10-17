import * as arrays from "../EJ1/arrays.js";

class Disco {
    constructor(
        nombre,
        autor,
        año_publicacion,
        genero,
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

   /* set ubicacion (ubicacion) {
        this.ubicacion = ubicacion;
    }*/

   /* set prestado (prestado){
        this.prestado = prestado;
    }*/

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



let formulario = document.getElementById("formulario");

formulario.addEventListener("change", function () {

    let listado_discos = [
        new Disco(
            "Thriller",
            "Michael Jackson",
            1982,
            "Pop",
            "thriller-cover.png"
        ),
        new Disco(
            "Back in Black",
            "AC/DC",
            1980,
            "Rock",
            "back_in_black-cover.jpg"
        ),
        new Disco(
            "The Bodyguard",
            "Whitney Houston",
            1992,
            "Pop",
            "the_bodyguard-cover.png"
        ),
    ];

    let opciones_menu = document.getElementsByName("opciones-menu");
    opciones_menu.forEach((opcion) => {
        if (opcion.checked) {
            document.getElementsByClassName(opcion.value)[0].style.display = "block";
        
            switch (opcion.value) {

                case "mostrar-cantidad": {
                    if (opcion.checked) {
                        document.getElementById("cantidad-discos").innerHTML = `Hay ${arrays.mostrarTamano(listado_discos)} discos`;
                    }
                } break;

                case "mostrar-tabla": {

                    let opciones_tabla = document.getElementsByName("opciones-orden-tabla");

                    opciones_tabla.forEach((opcion) => {
                        if (opcion.checked) {
                        document.getElementsByClassName(opcion.value)[0].style.display = "block";
                            let tabla = document.getElementsByClassName(opcion.value)[0];
                            switch (opcion.value) {
                                case "orden-normal": {
                                    arrays.mostrarListado(listado_discos).forEach((disco) => {
                                        tabla.insertRow().insertCell().innerHTML = disco.mostrarInfoDisco();
                                    });
                                } break;
                                case "orden-inverso": {
                                    arrays.mostrarListadoInverso(listado_discos).forEach((disco) => {
                                        tabla.insertRow().insertCell().innerHTML = disco.mostrarInfoDisco();
                                    });
                                } break;
                                case "orden-alfabeto": {
                                    arrays.mostrarListadoAlfabetico(listado_discos).forEach((disco) => {
                                        tabla.insertRow().insertCell().innerHTML = disco.mostrarInfoDisco();
                                    });
                                } break;
                            }
                        } else {
                            document.getElementsByClassName(opcion.value)[0].style.display = "none";
                        }
                    });
                } break;

                case "mostrar-intervalo":{
                    let min = document.getElementById("min").value;
                    let max = document.getElementById("max").value;
                    document.getElementById("mostrar-intervalo").addEventListener("click", function() {
                        listado_discos.forEach(disco => {
                        if(disco.año_publicacion >= min && disco.año_publicacion <= max)
                            document.getElementById("intervalo").innerHTML += disco.mostrarInfoDisco();
                        });
                    });
                    
                } break;

                case "añadir-disco": {
                    let opciones_añadir = document.getElementsByName("opciones-añadir");

                    opciones_añadir.forEach((opcion) => {
                        if (opcion.checked) {
                            
                            switch (opcion.value) {
                                case "añadir-principio": {
                                    document.getElementById("añadir").addEventListener("click", function () {
                                        let disco_a_añadir = new Disco(
                                        document.getElementById("nombre-disco-a-añadir").value,
                                        document.getElementById("autor-disco-a-añadir").value,
                                        document.getElementById("año-disco-a-añadir").value,
                                        document.getElementById("genero-disco-a-añadir").value,
                                        document.getElementById("caratula-disco-a-añadir").value
                                        );
                                        arrays.añadirPrincipio(listado_discos, disco_a_añadir);
                                    });
                                } break;
                                case "añadir-final": {
                                    document.getElementById("añadir").addEventListener("click", function () {
                                        let disco_a_añadir = new Disco(
                                        document.getElementById("nombre-disco-a-añadir").value,
                                        document.getElementById("autor-disco-a-añadir").value,
                                        document.getElementById("año-disco-a-añadir").value,
                                        document.getElementById("genero-disco-a-añadir").value,
                                        document.getElementById("caratula-disco-a-añadir").value
                                        );
                                        arrays.añadirFinal(listado_discos, disco_a_añadir);
                                    });
                                } break;
                            }
                        } 
                    });
                } break;

                case "eliminar-disco": {
                    let opciones_eliminar = document.getElementsByName("opciones-eliminar");

                    opciones_eliminar.forEach((opcion) => {
                        if (opcion.checked) {
                            
                            switch (opcion.value) {
                                case "eliminar-principio": {
                                    document.getElementById("eliminar").addEventListener("click", function () {
                                        arrays.eliminarPrincipio(listado_discos);
                                    });
                                } break;
                                case "eliminar-final": {
                                    document.getElementById("eliminar").addEventListener("click", function () {
                                        arrays.eliminarFinal(listado_discos);
                                    });
                                } break;
                            }
                        } 
                    });
                } break;
                case "consultar-disco": {

                    let opciones_consulta = document.getElementsByName("consulta");

                    opciones_consulta.forEach((opcion) => {
                        if (opcion.checked) {
                            document.getElementsByClassName(opcion.value)[0].style.display = "block";
                            let id_consulta = document.getElementsByClassName(opcion.value)[0].children.item(1).id;
                            switch (id_consulta) {
                                case "nombre-disco": {
                                    document.getElementById("consultar-nombre").addEventListener("click", function () {
                                        let nombre = document.getElementById("nombre-disco").value;
                                        document.getElementById("resultado-consulta-nombre").innerHTML += (arrays.mostrarPorNombre(listado_discos, nombre));
                                    });
                                } break;
                                case "posicion-disco": {
                                    document.getElementById("consultar-posicion").addEventListener("click", function () {
                                        let posicion = parseInt(document.getElementById("posicion-disco").value);
                                        document.getElementById("resultado-consulta-posicion").innerHTML += arrays.mostrarPorPosicion(listado_discos, posicion);
                                    });
                                } break;
                            }
                        } else {
                            document.getElementsByClassName(opcion.value)[0].style.display = "none";
                        }
                    });
                } break;
            }
        } else {
            document.getElementsByClassName(opcion.value)[0].style.display = "none";
        }
    });
});

