const numeros = [5, 51, 54, 64, 68, 1];

document.getElementById("orden").innerHTML = "Ver por orden de aparición";
document.getElementById("numeros").innerHTML = numeros.toSorted();

document.getElementById("orden").addEventListener("mouseover", () => {
    document.getElementById("orden").innerHTML =
        "Ver por orden de menor a mayor";
    document.getElementById("numeros").innerHTML = numeros;
});

document.getElementById("orden").addEventListener("mouseout", () => {
    document.getElementById("orden").innerHTML =
        "Ver por orden de aparición";
    document.getElementById("numeros").innerHTML = numeros.toSorted();
});
