var listaPilotos = [];

window.addEventListener("load", inicio);

function inicio() {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState == 4 && this.status == 200) {
            listaPilotos = JSON.parse(this.responseText).pilotos;
        }
    });

    xhr.open("GET", "pilotos.json", true);
    xhr.send();
}