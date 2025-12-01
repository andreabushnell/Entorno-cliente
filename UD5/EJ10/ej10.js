class Cliente {
    constructor(documento, fechaNac, clave) {
        this.documento = documento;
        this.fechaNac = fechaNac;
        this.clave = clave;
    }
}

let clientes = [new Cliente("12673909B", "09-02-1987", 42563447), new Cliente("25464880L", "01-15-1990", 15426699), new Cliente ("77060031K", "04-07-1974", 78554312)];



document.getElementById('formulario').addEventListener('submit', (e) =>{
    e.preventDefault();

    let documento = document.getElementById('num-doc');
    let fechaNac = document.getElementById('fec-nac');

    if (document.getElementById('recordar').checked){
        let recordar = true;
    } else {
        let recordar = false;
    }

    let encontrado = clientes.foreach((cliente) =>{
        return cliente.documento==documento && cliente.fechaNac==fechaNac;
    });

    if(encontrado){
        if(recordar){
            localStorage.setItem("documento",documento);
            localStorage.setItem("fechaNac",fechaNac);
        }
        document.getElementsByClassName("pag-bienvenida").style.display = 'none';
        document.getElementsByClassName('pag-clave').style.display = 'block';

        let rNums = [];
        let contador = 10;
        while (contador>0){
            let n = Math.random(0,9);
            if(!rNums.includes(n)){
                rNums.push(n);
                contador--;
            }
        }
        //insert rNums values into table

    } else {
        //display user not found
    }

})