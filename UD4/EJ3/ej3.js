class Cliente {
    constructor(nombre, localidad, cuota) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.cuota = cuota;
    }
}

let clientes = [
    new Cliente("Laura","Santander",50),
    new Cliente("Álvaro","Castro",50),
    new Cliente("Igor","Castro",60),
    new Cliente("Ivan","Santander",40),
    new Cliente("Mónica","Zamora",30),
    new Cliente("Javi","Bilbao",30),
    new Cliente("David","Bilbao",50),
];

document.getElementById("listar-clientes").addEventListener("click", function () {
    var tablaClientes = document.getElementById("tabla-clientes");
    clientes.forEach((element) => {
        tablaClientes.insertRow().insertCell().innerHTML =
            "Nombre: " +
            element.nombre +
            "<br>" +
            "Localidad: " +
            element.localidad +
            "<br>" +
            " Cuota: " +
            element.cuota;
    });
})

document.getElementById("escoger-localidad").addEventListener("click", function () {
    var tablaLocalidad = document.getElementById("tabla-localidad");
    let localidad = document.getElementById("localidad").value;
    clientes.forEach((element) => {
        if ((element.localidad == localidad)) {
            tablaLocalidad.insertRow().insertCell().innerHTML =
                "Nombre: " +
                element.nombre +
                "<br>" +
                " Cuota: " +
                element.cuota;
        }
    });
});

document.getElementById("escoger-min-cuota").addEventListener("click", function () {
    var tablaCuota = document.getElementById("tabla-cuota");
    let min_cuota = document.getElementById("min-cuota").value;
    clientes.forEach((element) => {
        if (element.cuota > min_cuota) {
            tablaCuota.insertRow().insertCell().innerHTML = "Nombre: " +
            element.nombre +
            "<br>" +
            "Localidad: " +
            element.localidad +
            "<br>" +
            " Cuota: " +
            element.cuota;
        }
    })
})
