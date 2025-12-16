/*
let inputs = Array.from(document.getElementsByTagName('input'));
let inputsTexto = [];

inputs.forEach((input)=>{
    if(input.type == "text"){
        inputsTexto.push(input);
    }
});

let ultimo = inputsTexto[inputsTexto.length-1];
ultimo.focus();
*/


let inputs = document.querySelectorAll('input');
let inputsTexto = [];

inputs.forEach((input)=>{
    if(input.type == "text"){
        inputsTexto.push(input);
    }
});

let ultimo = inputsTexto[inputsTexto.length-1];
ultimo.focus();