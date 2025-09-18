let respuesta = prompt("Introduce una edad: ");

if (respuesta>-1){
    if (respuesta>=0 && respuesta<=12){
        alert("Niño");
    } else if (respuesta<=26){
        alert("Joven");
    } else if (respuesta<=60){
        alert("Adulto");
    }else alert("Jubilado");
} else alert("Edad inválida");
