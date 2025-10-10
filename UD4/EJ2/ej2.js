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

var listadoDNIs = [];

document.getElementById("mostrar-listado").addEventListener("click", function () {
    let letra = document.getElementById("letra").value;
    for (let i = 1; i < 1000; i++) {
        if (i % 23 == letras_nif.indexOf(letra)) {
            listadoDNIs.push((i.toString()+letra).padStart(4, '0'));
        }
    }
    document.getElementById("listado-dnis").innerHTML = listadoDNIs.toString();
});