function validarNombreYArtista(nombreOArtista) {
    if (nombreOArtista.value == "") {
        mensaje.innerHTML += `Falta el ${nombreOArtista.name}. `;
        nombreOArtista.style.border = "thick solid red";
    } else if (nombreOArtista.value.length > 20) {
        mensaje.innerHTML += `El ${nombreOArtista.name} puede tener un máximo de 20 caracteres. `;
        nombreOArtista.style.border = "thick solid red";
    } else {
        nombreOArtista.style.border = "none";
    }
}

function validarAño(año) {
    if (año.length != 4){
        mensaje.innerHTML += "El año debe tener 4 dígitos. ";
        año.style.border = "thick solid red";
    } else if(NaN(parseInt(año)))  {
        mensaje.innerHTML += "El año debe contener valores numéricos. ";
        año.style.border = "thick solid red";
    } else {
        año.style.border = "none";
    }
}

let enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
    let nombre = document.getElementById("inputNombre");
    let artista = document.getElementById("inputArtista");
    let año = document.getElementById("inputAño");

    validarNombreYArtista(nombre)
    validarNombreYArtista(artista)
    validarAño(año)
});
