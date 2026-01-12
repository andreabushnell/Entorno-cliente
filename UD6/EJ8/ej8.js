/*
Crea una aplicación web interactiva donde el usuario pueda cargar imágenes a una galería. Utiliza JavaScript para crear de manera dinámica los elementos del DOM.

Puedes utilizar “<input type="file" id="imagen" accept="image/*">” para seleccionar una imagen.	

El archivo leído en el input type=”file” lo puedes transformar en una url para pasarle a la propiedad src de la imagen con el método siguiente: URL.createObjectURL(archivo)

Cada imagen debe de tener un botón con una x en rojo que permita eliminarla, similar a la siguiente imagen:

*/
let imagen = document.getElementById('imagen');
let galeria = document.getElementById('galeria');

imagen.addEventListener('change', function() {
    let archivo = this.files[0];

    let url = URL.createObjectURL(archivo);

    let tarjeta = document.createElement('div');
    tarjeta.className = 'imagen-card';

    let elementoImagen = document.createElement('img');
    elementoImagen.src = url;

    let botonBorrar = document.createElement('button');
    botonBorrar.textContent = 'X';
    botonBorrar.className = 'btn-borrar';

    botonBorrar.addEventListener('click', () => {
        tarjeta.remove();
        URL.revokeObjectURL(url);
    });

    tarjeta.appendChild(elementoImagen);
    tarjeta.appendChild(botonBorrar);
    galeria.appendChild(tarjeta);
    

    imagen.value = "";
})