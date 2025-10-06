var nombre_apellidos;

function aceptar_nombre() {
  nombre_apellidos = document.getElementById("nombre-apellidos").value;

  function tamano() {
    return nombre_apellidos.length;
  }
  function mins() {
    return nombre_apellidos.toLowerCase();
  }
  function mays() {
    return nombre_apellidos.toUpperCase();
  }
  function divNomApllds() {
    return nombre_apellidos.split(" ", 3);
  }
  function usuario1() {
    return (divNomApllds()[0].slice(0,1)+divNomApllds()[1]+divNomApllds()[2].slice(0,1)).toLowerCase();
  }
  function usuario2() {
    return divNomApllds()[0].slice(0,3)+divNomApllds()[1].slice(0,3)+divNomApllds()[2].slice(0,3);
  }

  document.getElementById("tamaño").innerHTML = "Tamaño: "+tamano()+" caracteres";
  document.getElementById("minusculas").innerHTML = "En minúsculas: "+mins();
  document.getElementById("mayusculas").innerHTML = "En mayúsculas: "+mays();
  document.getElementById("nombre").innerHTML = "Solo nombre: "+divNomApllds()[0];
  document.getElementById("apellido1").innerHTML = "Solo 1er apellido: "+divNomApllds()[1];
  document.getElementById("apellido2").innerHTML = "Solo 2o apellido: "+divNomApllds()[2];
  document.getElementById("usuario1").innerHTML = "Opción de usuario 1: "+usuario1();
  document.getElementById("usuario2").innerHTML = "Opción de usuario 2: "+usuario2();
}
