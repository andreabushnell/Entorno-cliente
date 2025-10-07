//Apartado 1

//Tabla de multiplicar del 7
let num1 = 7;
document.write("Tabla de multiplicar del 7: <br>");
for (i=1; i<=10; i++) {
    document.write(num1+" x "+i+" = "+num1 * i + "<br>");
}

//Tabla de sumar del 8
let num2 = 8;
let cont1 = 1;
document.write("<br>Tabla de sumar del 8: <br>");
while (cont1<=10) {
    document.write(num2+" + "+cont1+" = "+(num2+cont1)+ "<br>");
    cont1++;
}

//Tabla de dividir del 9
let num3 = 9;
let cont2 = 1;
document.write("<br>Tabla de dividir del 9: <br>");
do {
    document.write(num3+" / "+cont2+" = "+(num3/cont2)+ "<br>");
    cont2++;
} while (cont2<=10) ;


//Apartado 2 

document.write("<br>Operaciones con desplazamiento de bits: ");
document.write("<br>125 / 8 = "+(125 >> 3));
document.write("<br>40 x 4 = "+(40 << 2));
document.write("<br>25 / 2 = "+(25 >> 1));
document.write("<br>10 x 16 = "+(10 << 4)); 
