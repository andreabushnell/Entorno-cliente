function validarFormulario() {
    let cadenaErrores = "";

    let nombre = document.getElementById("nombre").value;
    if (nombre == "") {
        cadenaErrores += "Falta el nombre. ";
    }

    let contacto = document.getElementById("contacto").value;
    if (contacto == "") {
        cadenaErrores += "Faltan los datos de contacto. ";
    }

    let contraseña = document.getElementById("contraseña").value;
    if (contraseña == "") {
        cadenaErrores += "Falta contraseña. ";
    }
    let recontraseña = document.getElementById("recontraseña").value;
    if (recontraseña == "") {
        cadenaErrores += "Falta la confirmación de contraseña. ";
    }

    if (cadenaErrores == "") {
        let datos = [nombre, contacto, contraseña];
        return datos;
    } else {
        document.getElementById("mensaje").innerHTML = cadenaErrores;
    }
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let datos = validarFormulario();

    if (!localStorage.getItem("nombre")) {
        localStorage.setItem("nombre", datos[0]);
    } else {
        document.getElementById("nombre").innerHTML =
            localStorage.getItem("nombre");
    }
    if (!localStorage.getItem("contacto")) {
        localStorage.setItem("contacto", datos[1]);
    } else {
        document.getElementById("contacto").innerHTML =
            localStorage.getItem("contacto");
    }
    if (!localStorage.getItem("contraseña")) {
        localStorage.setItem("contraseña", datos[2]);
    } else {
        document.getElementById("contraseña").innerHTML =
            localStorage.getItem("contraseña");
    }
    
});
