if (
    localStorage.getItem("nombre") != "" &&
    localStorage.getItem("contacto") != ""
) {
    document.getElementById("nombre").value = localStorage.getItem("nombre");
    document.getElementById("contacto").value =
        localStorage.getItem("contacto");
}

let formulario = document.getElementById("formulario");

formulario.addEventListener("click", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre");
    let contacto = document.getElementById("contacto");
    let contraseña = document.getElementById("contraseña");
    let recontraseña = document.getElementById("recontraseña");

    let cadenaErrores = "";

    if (nombre.value == "") {
        document.getElementById("error-nombre").style.display = "block";
        cadenaErrores += ".";
    } else {
        document.getElementById("error-nombre").style.display = "none";
    }
    if (contacto.value == "") {
        document.getElementById("error-contacto").style.display = "block";
        cadenaErrores += ".";
    } else {
        document.getElementById("error-contacto").style.display = "none";
    }
    if (contraseña.value == "") {
        document.getElementById("error-contraseña").style.display = "block";
        cadenaErrores += ".";
    } else {
        document.getElementById("error-contraseña").style.display = "none";
    }
    if (recontraseña.value != contraseña.value) {
        document.getElementById("error-recontraseña").style.display = "block";
        cadenaErrores += ".";
    } else {
        document.getElementById("error-recontraseña").style.display = "none";
    }

    if (cadenaErrores == "") {
        localStorage.setItem("nombre", nombre.value);
        localStorage.setItem("contacto", contacto.value);
    }
});
