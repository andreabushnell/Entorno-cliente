//Opcion 1
let timer = setTimeout(()=>{
    alert(new Date());
}, 2000);

//Opcion 2
let contador = 0;
let intervalo = setInterval(()=>{
    contador++;
    if(contador==2){
        alert(new Date());
        clearInterval(intervalo);
    }
},2000);