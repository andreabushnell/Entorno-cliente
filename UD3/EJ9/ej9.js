let respuesta = prompt("Escoge un documento:\n1. NIF\n2. NIE");
var num_nif; var nif_completo;
var letra_nie; var num_nie; var nie_completo;
const letras_nif = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
const letras_nie = ['X','Y','Z'];

switch (parseInt(respuesta)) {
  case 1:
    {
      document.getElementById("bloque-nif").style.display = "block";
    }
    break;
  case 2:
    {
      document.getElementById("bloque-nie").style.display = "block";
    }
    break;
}

function enviar_nif(){
    num_nif = document.getElementById("n-nif").value;
    document.getElementById("resultado").innerHTML = num_nif+letras_nif[parseInt(num_nif)%23].toString();
}
function enviar_nie(){
    letra_nie = document.getElementById("l-nie").value;
    num = letras_nie.indexOf(letra_nie);
    num_nie = num.toString()+document.getElementById("n-nie").value.toString();
    document.getElementById("resultado").innerHTML = letras_nie[num]+num_nie+letras_nif[parseInt(num_nie)%23].toString();
}
