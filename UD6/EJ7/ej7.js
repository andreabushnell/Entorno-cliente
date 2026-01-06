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
    new Edificio("Paseo del Prado 25", 4, 2)
];
edificios.forEach((edificio) => {
    let opcion = document.createElement('option');
    opcion.value = edificio.direccion;
    opcion.innerHTML = edificio.direccion;
    document.getElementById("lista-edificios").append(opcion);
});

let propietarios = [
    new Propietario(edificios[0], 1, 1, "Ana García"),
    new Propietario(edificios[0], 1, 2, "Luis Rodríguez"),
    new Propietario(edificios[1], 2, 1, "Marta Sánchez"),
    new Propietario(edificios[1], 2, 2, "Carlos Pérez"),
    new Propietario(edificios[2], 1, 1, "Elena Martínez")
];

//RECUPERAR INPUTS
let direccion = document.getElementById("add-direccion");
let nPlantas = document.getElementById("add-plantas");
let puertasPorPlantas = document.getElementById("add-puertas");

let listaEdificios = document.getElementById("lista-edificios");
let nPlanta = document.getElementById("mod-plantas");
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
    var seleccionado;
    Array.from(listaEdificios).forEach((edificio) => {
        if (edificio.checked) {
            console.log(edificio);
            seleccionado = edificio;
        } else {console.log(edificio);}
    })

    propietarios.forEach((propietario) => {
        if (propietario.edificio == seleccionado && propietario.planta == nPlanta.value && propietario.puerta == nPuerta.value) {
            console.log("inicial "+propietario);
            propietario.nombre = nuevoPropietario.value;
            console.log("nuevo "+propietario);
        }
    });

    
});

//MOSTRAR INFORMACION EDIFICIO
mostrarEdificio.addEventListener("click", () => {});
