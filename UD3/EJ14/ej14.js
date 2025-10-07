var pc_nom; var letra; var num;

const regex = /[A-Z\d]*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)[A-C]{1}/;

function mostrarIP() {
    pc_nom = (document.getElementById("pc-nom").value).toUpperCase();

    let encontrado = pc_nom.match(regex);
    let longitud = pc_nom.length;
    
    if (encontrado[0]==pc_nom){

        letra = pc_nom[longitud-1];
       
        num = pc_nom.substring(longitud-4, longitud-1);

        resultado = document.getElementById("resultado").innerHTML;
        switch(letra){
            case 'A': {
                resultado = "IP: 10.42.68."+num;
            }
            break;
            case 'B': {
                resultado = "IP: 10.42.69."+num;
            }
            break;
            case 'C': {
                resultado = "IP: 10.52.178."+num;
            }
            break;
        }
    } else {
        resultado = "Formato erróneo";
    }
}
