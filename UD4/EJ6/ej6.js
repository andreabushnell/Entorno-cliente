const convocatorias = [];

document.getElementById("añadir-cadena").addEventListener("click", function () {
    let cadena = document.getElementById("cadena").value;
    let contador = 0;
    convocatorias.push (cadena.split(","));
    convocatorias.sort();
    

});
console.log(convocatorias);