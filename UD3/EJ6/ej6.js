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
    return (
      nombre_apellidos.slice(1, 1) +
      divNomApllds()[2] +
      divNomApllds()[3].slice(1, 1)
    );
  }
  function usuario2() {}

  document.getElementById("tamaño").innerHTML = ;
  document.getElementById("minusculas").innerHTML = ;
  document.getElementById("mayusculas").innerHTML = ;
  document.getElementById("nombre").innerHTML = ;
  document.getElementById("apellido1").innerHTML = ;
  document.getElementById("apellido2").innerHTML = ;
  document.getElementById("usuario1").innerHTML = ;
  document.getElementById("usuario2").innerHTML = ;
}
