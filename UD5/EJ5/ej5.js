let listaDiscos = [];
let mensaje = document.getElementById("mensaje");

function validarNombreYArtista(nombreOArtista) {
    if (nombreOArtista.value == "") {
        mensaje.innerHTML += `Falta el ${nombreOArtista}. `;
        nombreOArtista.style.border = "thick solid red";
    } else if (nombreOArtista.value.length > 20) {
        mensaje.innerHTML += `El ${nombreOArtista} puede tener un máximo de 20 caracteres. `;
        nombreOArtista.style.border = "1px solid red";
    } else {
        nombreOArtista.style.border = "none";
    }
}

function validarAño(año) {
    if (año.length != 4){
        mensaje.innerHTML = "El año debe tener 4 dígitos. ";
    } else if(NaN(parseInt(año)))  {
        mensaje.innerHTML = "El año debe contener valores numéricos. ";
    } else {
        año.style.border = "none";
    }
}

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", () => {
    let nombre = document.getElementById("inputNombre");
    let artista = document.getElementById("inputArtista");
    let año = document.getElementById("inputAño");

    validarNombreYArtista(nombre); 
    validarNombreYArtista(artista); 
    validarAño(año);
});
