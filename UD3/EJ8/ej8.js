var cadena;

function enviar(){
    cadena = document.getElementById("cadena").value;
    cadena = cadena.split(":",5);
    let apellidos = cadena[1];
    let tlf = cadena[2];
    let email = cadena[3];
    let dominio = email.slice(email.indexOf("@"),email.length);
    let cp = cadena[4];

    document.getElementById("apellidos").innerHTML = "Apellidos: "+apellidos;
    document.getElementById("telefono").innerHTML = "Teléfono: "+tlf;
    document.getElementById("correo").innerHTML = "Correo: "+email;
    document.getElementById("dominio").innerHTML = "Dominio: "+dominio;
    document.getElementById("codigo-postal").innerHTML = "Código postal: "+cp;
}