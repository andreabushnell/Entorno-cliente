var pc_nom; var letra; var num;
const regex = /[A-Z\d]*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)[A-C]{3}/;

function mostrarIP() {
    pc_nom = (document.getElementById("pc-nom").value).toUpperCase();
    if (pc_nom.matches(regex)[0]==pc_nom){
        letra = pc_nom[pc_nom.length];
        num = pc_nom.slice[pc_nom.length-4, pc_nom.length-1];
        switch(letra){
            case 'A': {
                document.getElementById("resultado").innerHTML = "10.42.68."+num;
            }
            break;
            case 'B': {
                document.getElementById("resultado").innerHTML = "10.42.69."+;
            }
            break;
            case 'C': {
                document.getElementById("resultado").innerHTML = "10.52.178."+num;
            }
            break;
        }
    } else {
        document.getElementById("resultado").innerHTML = "Formato erróneo"+num;
    }
}