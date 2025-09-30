var numero;

function guardar_num(){
    numero = parseInt(document.getElementById("num").value);

    function getExp () {
        return numero.toExponential();
    }
    function get4dec () {
        return numero.toFixed(4);
    }
    function getBin () {
        return numero.toString(2);
    }
    function getOct () {
        return numero.toString(8);
    }
    function getHex () {
        return numero.toString(16);
    }

    document.getElementById("exp").innerHTML = "Valor exponencial: "+getExp();
    document.getElementById("4dec").innerHTML = "Número con 4 decimales: "+get4dec();
    document.getElementById("bin").innerHTML = "Binario: "+getBin();
    document.getElementById("oct").innerHTML = "Octal: "+getOct();
    document.getElementById("hex").innerHTML = "Hexadecimal: "+getHex();
}