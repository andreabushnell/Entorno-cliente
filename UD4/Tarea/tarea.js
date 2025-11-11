class Edificio {
    constructor (calle, numero, cod_post) {
        this.calle = calle;
        this.numero = numero;
        this.cod_post = cod_post;
        this.plantas = [];
    }


    agregarPlantasYPuertas(numPlantas, puertas){
        let UltimaPlantaActual = this.plantas.length;
        let nPlantasAAñadir = UltimaPlantaActual + numPlantas;
        for(let i=UltimaPlantaActual; i<nPlantasAAñadir; i++){
            for (let j=0; j<puertas; j++){
                this.plantas[i][j].push("Descocupado");
            }
        }
    }
    modificarNumero(numero){
        this.numero = numero;

    }
    modificarCalle(calle){
        this.calle = calle;
    }
    modificarCodigoPostal(codigo){
        this.cod_post = codigo;
    }
    imprimeCalle(){
        return this.calle;
    }
    imprimeNumero (){
        return this.numero;
    }
    imprimeCodigoPostal (){
        return this.cod_post;
    }   
    agregarPropietario(nombre, planta , puerta){
        this.plantas[planta][puerta] = nombre;
        return "Propietario del piso "+puerta+" de la planta "+planta+": "+nombre;
    }
    imprimePlantas (){
        
    }
    mostrarInfoEdificio(){
        return "Construido nuevo edificio en calle: "+this.calle+", "+"nº: "+this.numero+", "+"CP: "+this.cod_post;
    }
}

let edificioA = new Edificio("Garcia Prieto", "58", "15706");
let edificioB = new Edificio("Camino Caneiro", "29", "32004");
let edificioC = new Edificio("San Clemente", "s/n", "15705");

document.getElementById("info-edificio-a").innerHTML = edificioA.mostrarInfoEdificio();
document.getElementById("info-edificio-b").innerHTML = edificioB.mostrarInfoEdificio();
document.getElementById("info-edificio-c").innerHTML = edificioC.mostrarInfoEdificio();

document.getElementById("cp-a").innerHTML = "El código postal del edificio A es: "+edificioA.cod_post;
document.getElementById("calle-c").innerHTML = "La calle del edificio C es: "+edificioC.calle;
document.getElementById("calle-numero-b").innerHTML = "El edificio B está situado en la calle "+edificioB.calle+" número "+edificioB.numero;

edificioA.agregarPlantasYPuertas(2,3);

document.getElementById("piso-1-1").innerHTML = edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
document.getElementById("piso-2-1").innerHTML = edificioA.agregarPropietario("Luisa Martinez", 2, 1);
document.getElementById("piso-3-1").innerHTML = edificioA.agregarPropietario("Marta Castellón", 3, 1);
document.getElementById("piso-1-2").innerHTML = "Propietario del piso 1 de la planta 2: ";
document.getElementById("piso-2-2").innerHTML = edificioA.agregarPropietario("Antonio Pereira", 2, 2);
document.getElementById("piso-3-2").innerHTML = "Propietario del piso 3 de la planta 2: ";

document.getElementById("piso-2-3").innerHTML = edificioA.agregarPropietario("Pedro Meijide", 3,2);

document.getElementById("act-piso-1-1").innerHTML = edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
document.getElementById("act-piso-2-1").innerHTML = edificioA.agregarPropietario("Luisa Martinez", 2, 1);
document.getElementById("act-piso-3-1").innerHTML = edificioA.agregarPropietario("Marta Castellón", 3, 1);
document.getElementById("act-piso-1-2").innerHTML = "Propietario del piso 3 de la planta 2: ";
document.getElementById("act-piso-2-2").innerHTML = "Propietario del piso 3 de la planta 2: ";
document.getElementById("act-piso-1-3").innerHTML = "Propietario del piso 1 de la planta 3: ";
document.getElementById("act-piso-2-3").innerHTML = edificioA.agregarPropietario("Pedro Meijide", 3,2);

