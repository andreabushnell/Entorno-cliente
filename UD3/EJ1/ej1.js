var fechaActual = new Date();
document.write("<br>Fecha actual: "+fechaActual);

var finCurso = new Date("2026-06-22");
document.write("<br>Fin de curso: "+finCurso+"<br>");

var diferencia = (finCurso-fechaActual) / (1000*60*60*24);
document.write("<br>Quedan "+diferencia+" días hasta fin de curso.");