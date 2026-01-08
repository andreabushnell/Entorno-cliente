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

let edificios = [
    new Edificio("Calle Mayor 1", 3, 4),
    new Edificio("Avenida Libertad 5", 2, 2),
    new Edificio("Plaza España 10", 5, 3),
    new Edificio("Calle Pez 12", 1, 10),
    new Edificio("Paseo del Prado 25", 4, 2),
];

let contador = 0;
edificios.forEach((edificio) => {
    let li = document.createElement('li');

    let opcion = document.createElement("option");
    opcion.value = edificio.direccion;
    opcion.innerHTML = edificio.direccion;

    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "edificios";
    radio.id = "radio"+contador;
    radio.className = 'radio-item';
    let etiqueta = document.createElement('label');
    etiqueta.htmlFor= radio.id;
    etiqueta.textContent = edificio.direccion;
    
    li.appendChild(radio);
    li.appendChild(etiqueta);

    document.getElementById("lista-edificios-radios").appendChild(li);

    document.getElementById("select-edificios").append(opcion);
    contador++;
});

let propietarios = [
    new Propietario(edificios[0], 1, 1, "Ana García"),
    new Propietario(edificios[0], 1, 2, "Luis Rodríguez"),
    new Propietario(edificios[1], 2, 1, "Marta Sánchez"),
    new Propietario(edificios[1], 2, 2, "Carlos Pérez"),
    new Propietario(edificios[2], 1, 1, "Elena Martínez"),
];

//RECUPERAR INPUTS
let direccion = document.getElementById("add-direccion");
let nPlantas = document.getElementById("add-plantas");
let puertasPorPlantas = document.getElementById("add-puertas");

let listaEdificios = document.getElementById("lista-edificios");
let nPlanta = document.getElementById("mod-planta");
let nPuerta = document.getElementById("mod-puerta");
let nuevoPropietario = document.getElementById("mod-propietario");

let seleccionarEdificio = document.getElementById("select-edificios");

//RECUPERAR BOTONES
let añadirEdificio = document.getElementById("btn-crear");
let actualizarPropietario = document.getElementById("btn-actualizar");
let mostrarEdificio = document.getElementById("btn-mostrar");

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
    let opciones = Array.from(listaEdificios.options);
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].selected) {
            edificios.forEach((edificio) => {
                if (edificio.direccion == opciones[i].value) {
                    seleccionado = edificio;
                }
            });
        }
    }

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
mostrarEdificio.addEventListener("click", () => {});
