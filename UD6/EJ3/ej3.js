window.addEventListener("load", generarFormulario);

class Disco {
    constructor(nombre, autor, año, genero) {
        this.nombre = nombre;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
    }

    mostrarInfoDisco() {
        return `    
    Nombre: ${this.nombre}

    Artista: ${this.autor}

    Año de publicación: ${this.año}

    Género: ${this.genero} 

    `;
    }
}

function generarFormulario() {
    let body = document.getElementsByTagName("body")[0];
    let titulo = crearTitulo("Introduce la información del disco:");
    let formulario = crearFormulario();
    let generos = ["Rock", "Pop", "Punk", "Indie"];

    formulario.appendChild(crearLabel("Nombre: ", "nombre"));
    formulario.appendChild(crearInput("text", "nombre"));

    formulario.appendChild(crearLabel("Artista: ", "artista"));
    formulario.appendChild(crearInput("text", "artista"));

    formulario.appendChild(crearLabel("Año de publicación: ", "año"));
    formulario.appendChild(crearInput("number", "año"));

    formulario.appendChild(crearLabel("Género: ", "genero"));
    formulario.appendChild(crearSelect("genero", generos));

    formulario.appendChild(crearBoton("Añadir"));

    body.appendChild(titulo);
    body.appendChild(formulario);
}

function crearTitulo(texto) {
    let titulo = document.createElement("h2");
    titulo.textContent = texto;
    return titulo;
}

function crearFormulario() {
    let formulario = document.createElement("form");
    return formulario;
}

function crearLabel(texto, atributo_for) {
    let label = document.createElement("label");
    label.htmlFor = atributo_for;
    label.textContent = texto;
    return label;
}

function crearInput(tipo, atributo_id) {
    let input = document.createElement("input");
    input.type = tipo;
    input.id = atributo_id;
    return input;
}

function crearSelect(atributo_id, opciones) {
    let select = document.createElement("select");
    select.id = atributo_id;
    opciones.forEach((opcion) => {
        let option = document.createElement("option");
        option.textContent = opcion;
        option.value = opcion;
        select.add(option);
    });
    return select;
}

function crearBoton(texto) {
    let boton = document.createElement("button");
    boton.textContent = texto;
    return boton;
}

let formulario = document.getElementsByTagName("form")[0];
let listaDiscos = [
    new Disco("OK Computer", "Radiohead", 1997, "rock"),
    new Disco("AM", "Arctic Monkeys", 2013, "indie"),
    new Disco("Nevermind", "Nirvana", 1991, "punk"),
];
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let artista = document.getElementById("artista").value;
    let año = document.getElementById("año").value.toString();
    let generos = document.getElementById("genero");
    let seleccionado = "";
    generos.forEach((genero) => {
        if (genero.checked) {
            seleccionado = genero;
        }
    });

    
});
