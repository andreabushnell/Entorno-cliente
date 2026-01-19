var listaPilotos = [];
var paginaActual = 1;
const pilotosPorPagina = 3;

window.addEventListener("load", inicio);

function inicio() {
    /*let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {
            listaPilotos = JSON.parse(this.responseText).pilotos;
            completarSelectNacionalidades();
        }
    });

    xhr.open("GET", "pilotos.json", true);
    xhr.send();*/
    

    fetch("pilotos.json")
    .then(respuesta => respuesta.json())
    .then(datos => {
        let pilotos = datos.pilotos;
        pilotos.forEach((piloto) => {
            listaPilotos.push(piloto);
        });
    })
    .catch(error => console.log(error.message));
}

//Recuperar botones
let btnMostrar = document.getElementById("verTodos");
let btnAnteriorPag = document.getElementById("paginaAnterior");
let btnSiguientePag = document.getElementById("paginaSiguiente");
let btnMostrarTodosPilotos = document.getElementById("mostrarTodosPilotos");

//Recuperar selects
let selectOrdenarPor = document.getElementById("campoOrden");
let selectOrden = document.getElementById("tipoOrden");
let selectNacionalidades = document.getElementById("filtroNacionalidad");

//Recuperar infoPagina
let infoPagina = document.getElementById("infoPagina");

//Completar el desplegable de nacionalidades
function recuperarNacionalidades() {
    let listaNacionalidades = [];

    listaPilotos.forEach((piloto) => {
        if (!listaNacionalidades.includes(piloto.nacionalidad)) {
            listaNacionalidades.push(piloto.nacionalidad);
        }
    });

    return listaNacionalidades;
}

function completarSelectNacionalidades() {
    let nacionalidades = recuperarNacionalidades();

    let opciones = selectNacionalidades.options;
    nacionalidades.forEach((nacion) => {
        let opcion = document.createElement("option");
        opcion.text = nacion;
        opciones.add(opcion);
    });
}

//Añadir eventos a botones
btnMostrar.addEventListener("click", () => {
    let pilotos = mostrarPilotos();

    colocarPilotos(pilotos, true);
});
btnAnteriorPag.addEventListener("click", mostrarPagAnterior);
btnSiguientePag.addEventListener("click", mostrarPagSiguiente);
btnMostrarTodosPilotos.addEventListener("click", mostrarTodosPilotos);

function mostrarPilotos() {
    let ordenPor = elegirOrdenPor();
    let orden = elegirOrden();
    let nacionalidad = elegirNacionalidad();

    switch (ordenPor) {
        case "nombre":
            switch (orden) {
                case "asc":
                    listaPilotos.sort((a, b) => {
                        if (a.nombre < b.nombre) {
                            return -1;
                        }
                        if (a.nombre > b.nombre) {
                            return 1;
                        }
                    });
                    break;
                case "desc":
                    listaPilotos.sort((a, b) => {
                        if (a.nombre < b.nombre) {
                            return 1;
                        }
                        if (a.nombre > b.nombre) {
                            return -1;
                        }
                    });
                    break;
            }
            break;
        case "equipo":
            switch (orden) {
                case "asc":
                    listaPilotos.sort((a, b) => {
                        if (a.equipo < b.equipo) {
                            return -1;
                        }
                        if (a.equipo > b.equipo) {
                            return 1;
                        }
                    });
                    break;
                case "desc":
                    listaPilotos.sort((a, b) => {
                        if (a.equipo < b.equipo) {
                            return 1;
                        }
                        if (a.equipo > b.equipo) {
                            return -1;
                        }
                    });
                    break;
            }
    }

    if (nacionalidad == "todas") {
        return listaPilotos;
    } else {
        let lista = [];
        listaPilotos.forEach((piloto) => {
            if (piloto.nacionalidad == nacionalidad) {
                lista.push(piloto);
            }
        });
        return lista;
    }
}
function mostrarPagAnterior() {
    paginaActual--;
    colocarPilotos(listaPilotos, true);
    infoPagina.innerHTML = "Página " + paginaActual;
}
function mostrarPagSiguiente() {
    paginaActual++;
    colocarPilotos(listaPilotos, true);
    infoPagina.innerHTML = "Página " + paginaActual;
}
function mostrarTodosPilotos() {
    colocarPilotos(listaPilotos, false);
}

//Recuperar valores seleccionados de desplegables
function elegirOrdenPor() {
    let opciones = Array.from(selectOrdenarPor.options);
    let seleccionado = opciones.find((opcion) => opcion.selected);
    return seleccionado.value;
}
function elegirOrden() {
    let opciones = Array.from(selectOrden);
    let seleccionado = opciones.find((opcion) => opcion.selected);
    return seleccionado.value;
}
function elegirNacionalidad() {
    let opciones = Array.from(selectNacionalidades);
    let seleccionado = opciones.find((opcion) => opcion.selected);
    return seleccionado.value;
}

function crearTarjetaPiloto(piloto) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-piloto");

    let nombre = document.createElement("h3");
    nombre.textContent = piloto.nombre.toUpperCase();

    let equipo = document.createElement("p");
    equipo.textContent = "Equipo: " + piloto.equipo;

    let numero = document.createElement("p");
    numero.textContent = "Número: " + piloto.numero;

    let nacionalidad = document.createElement("p");
    nacionalidad.textContent = "Nacionalidad: " + piloto.nacionalidad;

    tarjeta.append(nombre, equipo, numero, nacionalidad);
    return tarjeta;
}

function colocarPilotos(pilotos, incluirPaginacion) {
    document.getElementById("contenedorPilotos").innerHTML = "";

    if (incluirPaginacion) {
        const inicio = (paginaActual - 1) * pilotosPorPagina;
        const fin = inicio + pilotosPorPagina;
        const pilotosPagina = pilotos.slice(inicio, fin);

        pilotosPagina.forEach((piloto) => {
            let tarjetaPiloto = crearTarjetaPiloto(piloto);
            tarjetaPiloto.addEventListener("click", function () {
                this.classList.toggle("destacado");
            });
            document
                .getElementById("contenedorPilotos")
                .appendChild(tarjetaPiloto);
        });
    } else {
        listaPilotos.forEach((piloto) => {
            let tarjetaPiloto = crearTarjetaPiloto(piloto);
            tarjetaPiloto.addEventListener("click", function () {
                this.classList.toggle("destacado");
            });
            document
                .getElementById("contenedorPilotos")
                .appendChild(tarjetaPiloto);
        });
    }
}
