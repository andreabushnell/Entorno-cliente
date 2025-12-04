let pagBienvenida = document.getElementById("pag-bienvenida");
let pagPin = document.getElementById("pag-clave");

pagBienvenida.style.display = "block";
pagPin.style.display = "none";

if (
    localStorage.getItem("documento") != "" &&
    localStorage.getItem("fechaNac") != ""
) {
    document.getElementById("num-doc").value =
        localStorage.getItem("documento");
    document.getElementById("fec-nac").value = localStorage.getItem("fechaNac");
}

class Cliente {
    constructor(documento, fechaNac, clave) {
        this.documento = documento;
        this.fechaNac = fechaNac;
        this.clave = clave;
    }
}

let clientes = [
    new Cliente("12673909B", "09-02-1987", 425634),
    new Cliente("25464880L", "01-15-1990", 154266),
    new Cliente("77060031K", "04-07-1974", 785543),
];

document.getElementById("continuar").addEventListener("click", () => {
    let documento = document.getElementById("num-doc").value;
    let fechaNac = document.getElementById("fec-nac").value;
    let recordar = document.getElementById("recordar");
    let guardarDatos = false;
    let clienteActual = "";

    if (recordar.checked) {
        guardarDatos = true;
    } else {
        guardarDatos = false;
    }

    console.log("Documento: " + documento);
    console.log("Fecha nacimiento: " + fechaNac);
    console.log("Guardar datos: " + guardarDatos);

    let encontrado = false;
    clientes.forEach((cliente) => {
        if (cliente.documento == documento && cliente.fechaNac == fechaNac) {
            encontrado = true;
            clienteActual = cliente;
        }
    });

    console.log("Encontrado: " + encontrado);
    if (encontrado) {
        if (guardarDatos) {
            localStorage.setItem("documento", documento);
            localStorage.setItem("fechaNac", fechaNac);
        }
        pagBienvenida.style.display = "none";
        pagPin.style.display = "block";

        //Insertar 3 números únicos entre 0 y 5
        let rNumsPin = [];
        let contadorPin = 3;
        while (contadorPin > 0) {
            let n = Math.floor(Math.random() * 6);
            if (!rNumsPin.includes(n)) {
                rNumsPin.push(n);
                contadorPin--;
            }
        }

        let tablaPin = document.getElementById("pin");
        let fila1Pin = tablaPin.insertRow(0);
        for (let i = 0; i < 6; i++) {
            let celda = fila1Pin.insertCell();
            if (i == rNumsPin[0] || i == rNumsPin[1] || i == rNumsPin[2]) {
                celda.textContent = "*";
            }
        }

        let rNumsPinPad = [];
        let contadorPinPad = 10;
        while (contadorPinPad > 0) {
            let n = Math.floor(Math.random() * 10);
            if (!rNumsPinPad.includes(n)) {
                rNumsPinPad.push(n);
                contadorPinPad--;
            }
        }

        let tablaPinPad = document.getElementById("pin-pad");
        let fila1PinPad = tablaPinPad.insertRow(0);
        let fila2PinPad = tablaPinPad.insertRow(1);
        for (let i = 0; i < 10; i++) {
            if (i >= 0 && i < 5) {
                let celda = fila1PinPad.insertCell();
                celda.textContent = rNumsPinPad[i];
            } else {
                let celda = fila2PinPad.insertCell();
                celda.textContent = rNumsPinPad[i];
            }
        }
        console.log("Pin: " + rNumsPin);
        console.log("Pin-pad: " + rNumsPinPad);

        let pin = [...(clienteActual.clave + "")];
        console.log("Pin: " + pin);

        let pinPad = document.getElementById("pin-pad");
        let numeros = Array.from(pinPad.getElementsByTagName("td"));
        let seleccionado = "";
        numeros.forEach((numero) => {
            numero.addEventListener("click", () => {
                seleccionado = numero.innerText;
                
            });
        });
    } else {
        let mensajeError = document.getElementById("mensaje-error");
        mensajeError.style.display = "block";
        mensajeError.innerHTML = "Usuario no encontrado";
    }
});
