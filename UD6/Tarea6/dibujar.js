window.addEventListener("load", inicio);

let zonaDibujo = document.getElementById("zonadibujo");
let cuadricula = document.createElement("table");
let listaColores = [];
let fondoCelda;
let estaPintando = false;

function añadirEventosAPaleta() {
    for (let i = 0; i < 6; i++) {
        let num = (i + 1).toString();
        let color = document.getElementsByClassName("color" + num)[0];
        color.addEventListener("click", seleccionar);
        listaColores.push(color);
    }

    function seleccionar() {
        listaColores.forEach((color) => {
            color.classList.remove("seleccionado");
        });
        this.classList.toggle("seleccionado");
        if (this.classList.contains("color6")) {
            document.getElementById("pincel").innerText =
                "PINCEL DESACTIVADO...";
        } else {
            document.getElementById("pincel").innerText = "PINCEL ACTIVADO";
        }
    }
}

function pintar() {
    listaColores.forEach((color) => {
        if (color.classList.contains("seleccionado")) {
            estaPintando = true;
            fondoCelda = window.getComputedStyle(color).backgroundColor;
            this.style.backgroundColor = fondoCelda;
        }
    });
}

function añadirEventosCuadricula() {
    cuadricula.addEventListener("mousemove", function (e) {
        if (e.target.tagName == "TD" && estaPintando) {
            e.target.style.backgroundColor = fondoCelda;
        } else return;
    });
    cuadricula.addEventListener("mouseup", () => {
        estaPintando = false;
    });
}

function generarCuadricula() {
    cuadricula.style.border = "1px solid black";

    for (let i = 0; i < 30; i++) {
        let fila = document.createElement("tr");
        fila.colSpan = 30;
        for (let i = 0; i < 30; i++) {
            let celda = document.createElement("td");
            celda.height = "10px";
            celda.width = "10px";
            celda.style.borderCollapse = "collapse";
            celda.style.border = "1px solid black";

            celda.addEventListener("click", pintar);

            fila.append(celda);
        }
        cuadricula.append(fila);
    }

    zonaDibujo.appendChild(cuadricula);
}

function inicio() {
    generarCuadricula();
    añadirEventosAPaleta();
    añadirEventosCuadricula();
}
