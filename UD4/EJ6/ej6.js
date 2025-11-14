const convocatorias = [];

let contador = 0;
document.getElementById("añadir-cadena").addEventListener("click", function () {
    let cadena = document.getElementById("cadena").value;

    convocatorias.push(cadena.split(","));

    const convocadosEnTodos = convocatorias.reduce(
        (interseccion, listaActual) => {
            return interseccion.filter((nombre) =>
                listaActual.includes(nombre)
            );
        }
    );
    document.getElementById("resultado").innerHTML = convocadosEnTodos;
});
