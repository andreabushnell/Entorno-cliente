function pintarBienvenida() {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("bienvenida").style.display = "block";
    document.getElementById(
        "bienvenida"
    ).innerHTML = `Bienvenido a Amazon, ${localStorage.getItem("nombre")}`;
}
function pintarIniciarSesion() {
    document.getElementById("nombre").innerHTML =
        localStorage.getItem("nombre");

    document.getElementById("contacto").innerHTML =
        localStorage.getItem("contacto");

    document.getElementById("recontraseña").style.display = "none";
    document.getElementById("label-recontraseña").style.display = "none";
    document.getElementById("titulo").innerHTML = "Iniciar sesión";
}

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
        let datos = [nombre, contacto];
        return datos;
    } else {
        document.getElementById("mensaje").innerHTML = cadenaErrores;
    }
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let datos = validarFormulario();
    if (typeof datos !== "undefined") {
        if (!localStorage.getItem("nombre")) {
            localStorage.setItem("nombre", datos[0]);
        }
        if (!localStorage.getItem("contacto")) {
            localStorage.setItem("contacto", datos[1]);
        }
        pintarBienvenida();
    }
});

document.getElementById("salir").addEventListener("click", () => {
    localStorage.removeItem("nombre");
    localStorage.removeItem("contacto");
    localStorage.removeItem("contraseña");

    document.getElementById("salir").style.display = "none";
});

if (
    localStorage.getItem("nombre") != null &&
    localStorage.getItem("contacto") != null
) {
    pintarIniciarSesion();
}