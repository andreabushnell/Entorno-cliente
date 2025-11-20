const letras_nif = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
];

const campoNIF = document.getElementById("num-nif");
const letraNIF = document.getElementById("letra-nif");

const calcularLetraNIF = function(e) {
    let num_nif = e.target.value;
    if (num_nif.length == 8) {
        letraNIF.value = letras_nif[parseInt(num_nif)%23].toString();
    } else {
        letraNIF.value = "";
    }
}

campoNIF.addEventListener("input", calcularLetraNIF);

