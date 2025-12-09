class Tarea {
    constructor(texto) {
        this.texto = texto;
        this.realizada = false;
    }
}

let listaTareas = [
    new Tarea("Hacer la compra"),
    new Tarea("Bajar al perro"),
    new Tarea("Comprar regalo para Ana"),
];

let tarea = document.getElementById("tarea");
let crear = document.getElementById("crear");

function mostrarLista() {
    let lista = document.createElement("ul");

    listaTareas.forEach((tarea) => {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let itemLista = document.createElement("li");

        let texto = document.createTextNode(tarea.texto);

        itemLista.appendChild(texto);

        lista.appendChild(checkbox);
        lista.appendChild(itemLista);
    });

    document.getElementsByTagName("body")[0].appendChild(lista);
    cambiarCheckboxes();
}

window.addEventListener("load", () => {
    mostrarLista();
});

crear.addEventListener("click", () => {
    listaTareas.push(new Tarea(tarea.value));
    document
        .getElementsByTagName("body")[0]
        .removeChild(document.getElementsByTagName("ul")[0]);
    mostrarLista();
});

function cambiarCheckboxes() {
    let checkboxes = Array.from(document.getElementsByTagName("input"));
    checkboxes.forEach((checkbox) => {
        console.log(checkbox.type);
        if (checkbox.type == "checkbox") {
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    let itemLista = checkbox.nextSibling;
                    itemLista.className = "realizada";
                    let tarea = listaTareas.find(itemLista);
                    tarea.realizada = true;
                } else {
                    let itemLista = checkbox.nextSibling;
                    itemLista.className = "";
                    let tarea = listaTareas.find(itemLista);
                    tarea.realizada = false;
                }
            });
        }
    });
}
