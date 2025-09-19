let respuesta = prompt("Introduce una edad: ");

if (respuesta>-1){
    switch(true){
        case (respuesta<=12): 
            alert("Niño");
            break;
        case (respuesta<=26): 
            alert("Joven");
            break;
        case (respuesta<=60): 
            alert("Adulto");
            break;
        default: alert("Jubilado");
    }


} else alert("Edad inválida");
