let crearParrafo = document.getElementsByTagName("button")[0];
let textArea = document.getElementsByTagName("textarea")[0];
let listaColores = Array.from(document.getElementsByTagName("li"));
let resultado = document.getElementById("resultado");

listaColores.forEach((item) => {
    item.addEventListener("click", seleccionar); 
});

function seleccionar(){
    listaColores.forEach((item) => {
        item.classList.remove('seleccionado');
    });
    this.classList.toggle("seleccionado");
}

crearParrafo.addEventListener("click", () => {
    if (textArea.value != "") {
        let color = recuperarColorSeleccionado();
        let parrafo = document.createElement("p");

        parrafo.style.backgroundColor = color;
        parrafo.textContent = textArea.value;

        resultado.appendChild(parrafo);
    } else {
        resultado.innerText =
            "ERROR. No se pudo crear el párrafo porque no se introdujo ningún texto.";
    }
});

function recuperarColorSeleccionado() {
    var color;
    listaColores.forEach((item) => {
        if(item.classList.contains('seleccionado')){
            color = window.getComputedStyle(item).backgroundColor;
        }
    });
    return color;
}
