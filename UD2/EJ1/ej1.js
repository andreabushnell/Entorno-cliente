var entero = 1357;
var decimal = 135.7;
var cientifico = 135e7;
var octal = 0o1357;
var hexadecimal = 0x1357;

console.log("Número entero " + entero);
console.log("Número decimal " + decimal);
console.log("Número científico " + cientifico);
console.log("Número octal " + octal);
console.log("Número hexadecimal " + hexadecimal);

/*
Muestra en la consola:
Número entero 1357 CORRECTO
vars.js:8 Número decimal 135.7 CORRECTO
vars.js:9 Número científico 1350000000 CORRECTO
vars.js:10 Número octal 751 SE TRADUCE A DECIMAL
vars.js:11 Número hexadecimal 4951 SE TRADUCE A DECIMAL
*/