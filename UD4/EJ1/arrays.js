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
function añadirPrincipio(listado, nombre) {
    listado.unshift(nombre);
}
function añadirFinal(listado, nombre) {
    listado.push(nombre);
}
function eliminarPrincipio(listado) {
    listado.shift();  
}
function eliminarFinal(listado) {
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
    añadirPrincipio,
    añadirFinal,
    eliminarPrincipio,
    eliminarFinal,
    mostrarPorNombre,
    mostrarPorPosicion,
};
