var edificios;
var contador;
var propietarios;

var direccion;
var nPlantas;
var puertasPorPlantas;
var listaEdificios;
var nPlanta;
var nPuerta;
var nuevoPropietario;
var seleccionarEdificio;
var añadirEdificio;
var actualizarPropietario;
var mostrarEdificio;

//CREAR CLASES
class Edificio {
    constructor(direccion, plantas, puertas) {
        this.direccion = direccion;
        this.plantas = plantas;
        this.puertas = puertas;
    }
}

class Propietario {
    constructor(edificio, planta, puerta, nombre) {
        this.edificio = edificio;
        this.planta = planta;
        this.puerta = puerta;
        this.nombre = nombre;
    }
}

function inicio() {
    edificios = [
        new Edificio("Calle Mayor 1", 3, 4),
        new Edificio("Avenida Libertad 5", 2, 2),
        new Edificio("Plaza España 10", 5, 3),
        new Edificio("Calle Pez 12", 1, 10),
        new Edificio("Paseo del Prado 25", 4, 2),
    ];

    contador = 0;

    edificios.forEach((edificio) => {
        let li = document.createElement("li");

        let opcion = document.createElement("option");
        opcion.value = edificio.direccion;
        opcion.innerHTML = edificio.direccion;

        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "edificios";
        radio.id = "radio" + contador;
        radio.className = "radio-item";
        radio.value = edificio.direccion;
        let etiqueta = document.createElement("label");
        etiqueta.htmlFor = radio.id;
        etiqueta.textContent = edificio.direccion;

        li.appendChild(radio);
        li.appendChild(etiqueta);

        document.getElementById("lista-edificios-radios").appendChild(li);

        document.getElementById("select-edificios").append(opcion);
        contador++;
    });

    propietarios = [
        new Propietario(edificios[0], 1, 1, "Ana García"),
        new Propietario(edificios[0], 1, 2, "Luis Rodríguez"),
        new Propietario(edificios[0], 1, 3, "María López"),
        new Propietario(edificios[0], 2, 1, "Javier Torres"),
        new Propietario(edificios[0], 2, 2, "Carmen Ruiz"),
        new Propietario(edificios[0], 3, 4, "Pedro Gómez"),

        new Propietario(edificios[1], 1, 1, "Marta Sánchez"),
        new Propietario(edificios[1], 1, 2, "Carlos Pérez"),
        new Propietario(edificios[1], 2, 1, "Laura Díaz"),
        new Propietario(edificios[1], 2, 2, "Andrés Moreno"),

        new Propietario(edificios[2], 1, 1, "Elena Martínez"),
        new Propietario(edificios[2], 2, 2, "Sergio Navarro"),
        new Propietario(edificios[2], 3, 1, "Patricia Romero"),
        new Propietario(edificios[2], 4, 3, "Alberto Gil"),
        new Propietario(edificios[2], 5, 2, "Isabel Vega"),

        new Propietario(edificios[3], 1, 1, "Raúl Molina"),
        new Propietario(edificios[3], 1, 3, "Nuria Campos"),
        new Propietario(edificios[3], 1, 5, "Fernando Ortega"),
        new Propietario(edificios[3], 1, 7, "Beatriz León"),
        new Propietario(edificios[3], 1, 8, "Hugo Serrano"),

        new Propietario(edificios[4], 1, 1, "Silvia Méndez"),
        new Propietario(edificios[4], 1, 2, "Daniel Rojas"),
        new Propietario(edificios[4], 2, 1, "Cristina Flores"),
        new Propietario(edificios[4], 3, 2, "Iván Pardo"),
        new Propietario(edificios[4], 4, 1, "Rocío Calvo"),
    ];

    //RECUPERAR INPUTS
    direccion = document.getElementById("add-direccion");
    nPlantas = document.getElementById("add-plantas");
    puertasPorPlantas = document.getElementById("add-puertas");

    listaEdificios = document.getElementsByName("edificios");
    nPlanta = document.getElementById("mod-planta");
    nPuerta = document.getElementById("mod-puerta");
    nuevoPropietario = document.getElementById("mod-propietario");

    seleccionarEdificio = document.getElementById("select-edificios");

    //RECUPERAR BOTONES
    añadirEdificio = document.getElementById("btn-crear");
    actualizarPropietario = document.getElementById("btn-actualizar");
    mostrarEdificio = document.getElementById("btn-mostrar");
}

inicio();

//CREAR EDIFICIO
añadirEdificio.addEventListener("click", () => {
    let nuevoEdificio = new Edificio(
        direccion.value,
        nPlantas.value,
        puertasPorPlantas.value
    );
    edificios.push(nuevoEdificio);
});

//MODIFICAR PROPIETARIO
actualizarPropietario.addEventListener("click", () => {
    let seleccionado = new Edificio();
    let opciones = Array.from(listaEdificios);
    opciones.forEach((opcion) => {
        if (opcion.checked) {
            edificios.forEach((edificio) => {
                if (edificio.direccion == opcion.value) {
                    seleccionado = edificio;
                }
            });
        }
    });

    propietarios.forEach((propietario) => {
        if (
            propietario.edificio === seleccionado &&
            propietario.planta == nPlanta.value &&
            propietario.puerta == nPuerta.value
        ) {
            propietario.nombre = nuevoPropietario.value;
        }
    });
});

//MOSTRAR INFORMACION EDIFICIO
mostrarEdificio.addEventListener("click", () => {
    let residentes = [];
    let opciones = Array.from(seleccionarEdificio);
    opciones.forEach((opcion) => {
        if (opcion.selected) {
            propietarios.forEach((propietario) => {
                if (propietario.edificio.direccion == opcion.value) {
                    residentes.push(propietario);
                }
            });
        }
    });

    generarTablaEdificio(residentes);
});

function generarTablaEdificio(propietarios) {
    document.getElementById("contenedor-tabla").innerHTML = "";

    let plantas = propietarios[0].edificio.plantas;
    let puertas = propietarios[0].edificio.puertas;
    let tabla = document.createElement("table");

    for (let i = 0; i < plantas; i++) {
        let fila = document.createElement("tr");

        let nombrePlanta = document.createElement("th");
        nombrePlanta.textContent = "Planta " + (i + 1);
        fila.append(nombrePlanta);

        let residentesPlanta = [];

        propietarios.forEach((propietario) => {
            if (propietario.planta == i + 1) {
                residentesPlanta.push(propietario);
            }
        });

        if (residentesPlanta.length > 1) {
            residentesPlanta.sort((a, b) => a.puerta - b.puerta);
        }

        for (let j = 0; j < puertas; j++) {
            let celda = document.createElement("td");

            let propietario = residentesPlanta.find((p) => p.puerta == j + 1);

            if (propietario) {
                celda.textContent = propietario.nombre;
            } else {
                celda.textContent = " ";
            }

            celda.addEventListener("click", modificarPropietarioClick);

            fila.append(celda);
        }

        tabla.append(fila);
    }

    document.getElementById("contenedor-tabla").append(tabla);
}

function modificarPropietarioClick() {
    let nombre = this.innerHTML;
    let encontrado = propietarios.find(
        (propietario) => propietario.nombre == nombre
    );

    let cajaInput = document.createElement("input");
    cajaInput.type = "text";

    this.replaceWith(cajaInput);
    cajaInput.addEventListener(
        "keydown",
        function modificarPropietarioEnter(e) {
            if (e.key == "Enter") {
                this.addEventListener;
                let nuevoNombre = this.value;

                encontrado.nombre = nuevoNombre;

                let celda = document.createElement("td");
                celda.textContent = nuevoNombre;
                this.replaceWith(celda);
            }
        }
    );

}
