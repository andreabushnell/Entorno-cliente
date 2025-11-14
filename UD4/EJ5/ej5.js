class Jugador {
    constructor () {
        this.fuerza = 1;
    }

    incrementarFuerza () {
        this.fuerza += 1;
    }

    consultarFuerza () {
        return `Tu fuerza es ${this.fuerza}`
    }
}

let jugador = new Jugador();

document.getElementById("incrementar").addEventListener("click", function () {
    jugador.incrementarFuerza();
});

document.getElementById("mostrar").addEventListener("click", function () {
    document.getElementById("fuerza-actual").innerHTML = jugador.consultarFuerza();
});

