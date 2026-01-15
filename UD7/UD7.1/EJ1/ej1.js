class Cliente {
    constructor(nombre, localidad, cuota) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.cuota = cuota;
    }
}

document
    .getElementById("listar-clientes")
    .addEventListener("click", function () {
        document.getElementById("tabla-clientes").innerHTML = "";
        var tablaClientes = document.getElementById("tabla-clientes");

        let clientes = [];

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                clientes = JSON.parse(this.responseText);

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
            }
        });

        xhr.open("GET", "clientes.json", true);
        xhr.send();
    });

document
    .getElementById("escoger-localidad")
    .addEventListener("click", function () {
        document.getElementById("tabla-localidad").innerHTML = "";
        var tablaLocalidad = document.getElementById("tabla-localidad");
        let localidad = document.getElementById("localidad").value;

        let clientes = [];

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                clientes = JSON.parse(this.responseText);

                clientes.forEach((element) => {
                    if (element.localidad == localidad) {
                        tablaLocalidad.insertRow().insertCell().innerHTML =
                            "Nombre: " +
                            element.nombre +
                            "<br>" +
                            " Cuota: " +
                            element.cuota;
                    }
                });
            }
        });

        xhr.open("GET", "clientes.json", true);
        xhr.send();
    });

document
    .getElementById("escoger-min-cuota")
    .addEventListener("click", function () {
        document.getElementById("tabla-cuota").innerHTML = "";
        var tablaCuota = document.getElementById("tabla-cuota");
        let min_cuota = document.getElementById("min-cuota").value;

        let clientes = [];

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                clientes = JSON.parse(this.responseText);

                clientes.forEach((element) => {
                    if (element.cuota > min_cuota) {
                        tablaCuota.insertRow().insertCell().innerHTML =
                            "Nombre: " +
                            element.nombre +
                            "<br>" +
                            "Localidad: " +
                            element.localidad +
                            "<br>" +
                            " Cuota: " +
                            element.cuota;
                    }
                });
            }
        });

        xhr.open("GET", "clientes.json", true);
        xhr.send();
    });
