window.onload = getUbicacion; 

function getUbicacion () {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            hayExito
        );
    } else {
        console.log("Los servicios de geolocalización no están activos.");
    }
}

function hayExito(posicion){
    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;
    console.log("Latitud: "+latitud+"\nLongitud: "+longitud);
}

