let equipos = [];

window.addEventListener("load", inicio);

function inicio() {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {
            equipos = JSON.parse(this.responseText);

            let select = document.createElement("select");
            select.addEventListener("change", elegirEquipo);

            equipos.forEach((equipo) => {
                let opcion = document.createElement("option");
                opcion.text = equipo.Nombre;
                select.add(opcion);
            });

            document.getElementsByTagName("body")[0].appendChild(select);
        }
    });

    xhr.open("GET", "equipos.json", true);
    xhr.send();
}

function elegirEquipo() {
    document.querySelectorAll("ul").forEach((lista) => {
        lista.remove();
    });

    let equiposSelect = Array.from(this.options);

    let seleccionado = equiposSelect.find((equipo) => equipo.selected);
    let equipo = equipos.find((equipo) => equipo.Nombre == seleccionado.value);

    let infoEquipo = document.createElement("ul");

    for (let i = 0; i < Object.keys(equipo).length; i++) {
        let attr = Object.keys(equipo)[i];

        switch (attr) {
            case "PJ":
                attr = "Partidos jugados";
                break;
            case "PG":
                attr = "Partidos ganados";
                break;
            case "PP":
                attr = "Partidos perdidos";
                break;
            case "PE":
                attr = "Partidos empatados";
                break;
        }

        let valor = Object.values(equipo)[i];

        let li = document.createElement("li");
        li.textContent = attr + ": " + valor;

        infoEquipo.appendChild(li);
    }

    document.getElementsByTagName("body")[0].appendChild(infoEquipo);
}
