window.addEventListener("load", generarFormulario);

class Disco {
    constructor(nombre, artista, año, genero) {
        this.nombre = nombre;
        this.artista = artista;
        this.año = año;
        this.genero = genero;
    }

    mostrarInfoDisco() {
        return `    
    Nombre: ${this.nombre}

    Artista: ${this.artista}

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
    formulario.appendChild(crearInput("text", "año"));

    formulario.appendChild(crearLabel("Género: ", "genero"));
    formulario.appendChild(crearSelect("genero", generos));

    body.appendChild(titulo);
    body.appendChild(formulario);
    body.appendChild(crearBoton("Añadir"));

    eventoFormulario();
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

function crearTabla(lista) {
    let body = document.getElementsByTagName("body")[0];
    let tabla = document.createElement("table");

    let fila = document.createElement('tr');

    let nombre = document.createElement('th');
    nombre.textContent = 'Nombre';

    let artista = document.createElement('th');
    artista.textContent = 'Artista';

    let año = document.createElement('th');
    año.textContent = 'Año';

    let genero = document.createElement('th');
    genero.textContent = 'Género';

    fila.append(nombre, artista, año, genero);
    tabla.appendChild(fila);

    lista.forEach((item) => {
        let fila = document.createElement("tr");

        let nombre = document.createElement("td");
        let artista = document.createElement("td");
        let año = document.createElement("td");
        let genero = document.createElement("td");

        nombre.textContent = item.nombre;
        artista.textContent = item.artista;
        año.textContent = item.año;
        genero.textContent = item.genero;

        fila.append(nombre, artista, año, genero);
        tabla.appendChild(fila);
    });

    body.appendChild(tabla);
}

let listaDiscos = [
    new Disco("OK Computer", "Radiohead", "1997", "Rock"),
    new Disco("AM", "Arctic Monkeys", "2013", "Indie"),
    new Disco("Nevermind", "Nirvana", "1991", "Punk"),
];

function eventoFormulario(){
    if (document.getElementsByTagName("button")[0] != undefined) {
    document.getElementsByTagName("button")[0].addEventListener("click", () => {
        let nombre = document.getElementById("nombre").value;
        let artista = document.getElementById("artista").value;
        let año = document.getElementById("año").value.toString();
        let generos = Array.from(document.getElementById("genero").options);
        let seleccionado = "";

        generos.forEach((genero) => {
            if (genero.selected) {
                seleccionado = genero.value;
            }
        });

        listaDiscos.push(new Disco(nombre, artista, año, seleccionado));

        crearTabla(listaDiscos);
    });
} else {
    alert("Formulario no encontrado");
}
}

/*Ejemplos discos
"Thriller", "Michael Jackson", "1982", "pop"
"Back in Black", "AC/DC", "1980", "rock"
*/
