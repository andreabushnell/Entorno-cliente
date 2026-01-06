function contarParrafos(){
    let parrafos = document.getElementsByTagName('p').length;
    return parrafos;
}

function textoSegundoParrafo(){
    let texto = document.getElementsByTagName('p')[1].value;
    return texto;
}

function contarEnlaces(){
    let nEnlaces = document.getElementsByTagName('a').length;
    return nEnlaces;
}

function direccionPrimerEnlace(){
    let direccion = document.getElementsByTagName('a')[0].href;
    return direccion;
}

function direccionPenultimoEnlace() {
    let longitud = document.getElementsByTagName('a').length;
    let direccion = document.getElementsByTagName('a')[longitud-1].href;
    return direccion;
}

function contarEnlacesWikiMunicipio(){
    let enlaces = Array.from(document.getElementsByTagName('a'));
    let contarEnlaces = [];
    enlaces.forEach((enlace) => {
        if(enlace.href=="/wiki/Municipio"){
            contarEnlaces.push(enlace);
        }
    });
    return contarEnlaces.length;
}

function contarEnlacesPrimerParrafo() {
    let parrafo = document.getElementsByTagName('p')[0];
    let contarEnlaces = [];
    Array.from(parrafo.children).forEach((item) => {
        if (item.tagName == 'A') {
            contarEnlaces.push(item);
        }
    });
    return contarEnlaces.length;
}

function mostrarPsEnConsola() {
    let parrafos = Array.from(document.getElementsByTagName);
    parrafos.forEach((p) => {
        console.log(p.value);
    })
}

let fichero = document.getElementsByTagName('input')[0];
let cargar = document.getElementsByTagName('button')[0];
let iframe = document.getElementsByTagName('iframe')[0];

cargar.addEventListener('click', () => {
    iframe.src = fichero;
});
