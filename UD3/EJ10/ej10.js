let respuesta = window.confirm("Quieres recibir notificaciones de este sitio?");
if (!respuesta) {
  miVentana = window.open();
  window.location.replace(miVentana);
  miVentana.document.write("Esta página ya no está disponible.");
}
