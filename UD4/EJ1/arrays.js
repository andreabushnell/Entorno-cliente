function mostrarTamano(listado) {
    return listado.length;
}
function mostrarListado(listado) {
    return listado.toString();
}
function mostrarListadoInverso(listado) {
    return listado.toReversed().toString();
}
function mostrarListadoAlfabetico(listado) {
    return listado.toSorted().toString();
}
function añadirPaisPrincipio(listado, nombre) {
    listado.unshift(nombre);
}
function añadirPaisFinal(listado, nombre) {
    listado.push(nombre);
}
function eliminarPaisPrincipio(listado) {
    listado.shift();  
}
function eliminarPaisFinal(listado) {
    listado.pop();
}
function mostrarPorNombre(listado, nombre) {
    return listado.indexOf(nombre);
}
function mostrarPorPosicion(listado, posicion) {
    return listado[posicion - 1].toString();
}

export {
    mostrarTamano,
    mostrarListado,
    mostrarListadoInverso,
    mostrarListadoAlfabetico,
    añadirPaisPrincipio,
    añadirPaisFinal,
    eliminarPaisPrincipio,
    eliminarPaisFinal,
    mostrarPorNombre,
    mostrarPorPosicion,
};
