function mostrarTamano(listado) {
    return listado.length;
}
function mostrarListado(listado) {
    return listado;
}
function mostrarListadoInverso(listado) {
    return listado.toReversed();
}
function mostrarListadoAlfabetico(listado) {
    return listado.toSorted();
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
    return listado.indexOf(nombre)+1;
}
function mostrarPorPosicion(listado, posicion) {
    return listado[posicion - 1];
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
