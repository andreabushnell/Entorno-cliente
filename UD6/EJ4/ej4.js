let contenedor_formulario = document.getElementById("formulario-generado");

let formulario = document.createElement("form");
contenedor_formulario.append(formulario);

//Recuperar botones y guardarlos en variables
let boton_text = document.getElementById("input-text");
let boton_password = document.getElementById("input-password");
let boton_textarea = document.getElementById("textarea");
let boton_label = document.getElementById("label");
let boton_img = document.getElementById("img");
let boton_checkbox = document.getElementById("input-checkbox");
let boton_radio = document.getElementById("input-radio");
let boton_submit = document.getElementById("button-submit");
let boton_reset = document.getElementById("reset");


function generarInputTexto() {
    if (confirm("Deseas crear un input de tipo texto?")) {
        //prompt: name
        let nombre = prompt("Introduce el nombre del atributo:");

        let inputTexto = document.createElement("input");
        inputTexto.type = "text";
        inputTexto.name = nombre;
        inputTexto.placeholder = "Introduce un texto corto...";
        inputTexto.size = inputTexto.placeholder.length;
        formulario.append(inputTexto);
    }
}

function generarInputPassword() {
    if (confirm("Deseas crear un input de tipo password?")) {
        //prompt: name
        let nombre = prompt("Introduce el nombre del atributo:");

        let inputPassword = document.createElement("input");
        inputPassword.type = "password";
        inputPassword.name = nombre;
        inputPassword.placeholder = "Introduce una contraseña...";
        inputPassword.size = inputPassword.placeholder.length;
        formulario.append(inputPassword);
    }
}

function generarTextarea() {
    if (confirm("Deseas crear un textarea?")) {
        //prompt: name
        let nombre = prompt("Introduce el nombre del atributo:");

        let textarea = document.createElement("textarea");
        textarea.name = nombre;
        textarea.placeholder = "Introduce un texto largo...";
        textarea.rows = 5;
        textarea.cols = 40;
        formulario.append(textarea);
    }
}

function generarLabel() {
    if (confirm("Deseas crear un label?")) {
        //prompt: for
        let para = prompt("Introduce a quién va referido el atributo:");

        let label = document.createElement("label");
        label.textContent = "Etiqueta para " + para;
        label.htmlFor = para;
        label.style.backgroundColor = "lightblue";
        formulario.append(label);
    }
}

function generarImagen() {
    if (confirm("Deseas crear una imagen?")) {
        //prompt: src
        let src = prompt("Introduce la ruta de la imagen:");

        let imagen = document.createElement("img");
        imagen.src = src;
        formulario.append(imagen);
    }
}

function generarCheckbox() {
    if (confirm("Deseas crear un input de tipo checkbox?")) {
        //prompt: name, value
        let nombreValor = prompt(
            'Introduce el nombre y valor del checkbox en formato "nombre-valor" :'
        );
        let arrayNombreValor = nombreValor.split("-");
        let nombre = arrayNombreValor[0];
        let valor = arrayNombreValor[1];

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = nombre;
        checkbox.value = valor;
        formulario.append(checkbox);
    }
}

function generarRadio() {
    if (confirm("Deseas crear un input de tipo radio?")) {
        //prompt: name, value
        let nombreValor = prompt(
            'Introduce el nombre y valor del botón de radio en formato "nombre-valor" :'
        );
        let arrayNombreValor = nombreValor.split("-");
        let nombre = arrayNombreValor[0];
        let valor = arrayNombreValor[1];

        let radio = document.createElement("input");
        radio.type = "radio";
        radio.value = valor;
        radio.name = nombre;
        formulario.append(radio);
    }
}

function generarSubmit() {
    if (confirm("Deseas crear un botón de tipo submit?")) {
        //prompt: name, value
        let nombreValor = prompt(
            'Introduce el nombre y valor del botón submit en formato "nombre-valor" :'
        );
        let arrayNombreValor = nombreValor.split("-");
        let nombre = arrayNombreValor[0];
        let valor = arrayNombreValor[1];

        let submit = document.createElement("button");
        submit.type = "submit";
        submit.textContent = "Submit";
        submit.value = valor;
        submit.name = nombre;
        formulario.append(submit);
    }
}

function resetFormulario() {
    if (confirm("Estás seguro de que quieres reiniciar el formulario?")) {
        while (formulario.hasChildNodes) {
            formulario.removeChild(formulario.firstChild);
        }
    }
}

//Añadir gestión de eventos a todos los botones
boton_text.addEventListener("click", generarInputTexto);
boton_password.addEventListener("click", generarInputPassword);
boton_textarea.addEventListener("click", generarTextarea);
boton_label.addEventListener("click", generarLabel);
boton_img.addEventListener("click", generarImagen);
boton_checkbox.addEventListener("click", generarCheckbox);
boton_radio.addEventListener("click", generarRadio);
boton_submit.addEventListener("click", generarSubmit);
boton_reset.addEventListener("click", resetFormulario);
