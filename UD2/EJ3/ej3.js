let op1 = (10==10);                 //TRUE-> Igualdad de dos enteros del mismo valor
alert("La operacion 10==10 es "+op1);
let op2 =  (10===10);               //TRUE-> Igualdad estricta de dos enteros del mismo valor
alert("La operacion 10===10 es "+op2);
let op3 = (10===10.0);              //TRUE-> Igualdad estricta de un entero y un double del mismo valor
alert("La operacion 10===10.0 es "+op3);
let op4 = ("Laura" == "laura");     //FALSE-> Sensible a mayúsculas, strings distintos
alert("La operacion \"Laura\" == \"laura\" es "+op4);
let op5 = ("Laura" > "laura");      //FALSE-> La mayúscula tiene un valor Unicode menor que la minúsucula
alert("La operacion \"Laura\" > \"laura\" es "+op5);
let op6 = ("Laura" < "laura");      //TRUE-> La minúscula tiene un valor Unicode mayor que la mayúscula
alert("La operacion \"Laura\" < \"laura\" es "+op6);
let op7 = ("123"==123);             //TRUE-> Considera "123" como entero
alert("La operacion \"123\"==123 es "+op7);
let op8 = ("123"===123);            //FALSE-> Igualdad estricta, no considera "123" como entero
alert("La operacion \"123\"===123 es "+op8);
let op9 = (parseInt("123")===123);  //TRUE-> Igualdad estricta, se hace un casting de "123" y se convierte en entero
alert("La operacion (\"123\")===123 es "+op9);