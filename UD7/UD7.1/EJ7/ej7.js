var listaProductos = [];
var listaCarrito = [];

window.addEventListener("load", function () {
    fetch("https://fakestoreapi.com/products")
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            listaProductos = datos;

            generarGaleriaProductos(listaProductos);
        })
        .catch((error) => console.log(error.message));

    recuperarLocalStorage();
});

function recuperarLocalStorage() {
    if (localStorage.getItem("carrito") != null) {
        let listaCarrito = JSON.parse(localStorage.getItem("carrito"));
        carrito.innerHTML = "";
        let total = 0;

        listaCarrito.forEach((item) => {
            let tarjeta = crearTarjetaCarrito(item);
            carrito.appendChild(tarjeta);

            total += item.price * item.quantity;
        });

        precioTotal.innerHTML = total + "€";
    }
}

//Recuperar elementos del DOM
let contenedorProductos = document.getElementById("products");
let carrito = document.getElementById("cart");
let precioTotal = document.getElementById("total");

//Funciones para crear y colocar las tarjetas de producto
function generarGaleriaProductos(listaProductos) {
    listaProductos.forEach((producto) => {
        crearTarjetaProducto(producto);
    });
}

function crearTarjetaProducto(producto) {
    let tarjeta = document.createElement("div");
    tarjeta.className = "product-card";

    let nombre = document.createElement("h3");
    nombre.textContent = producto.title;

    let categoria = document.createElement("p");
    categoria.textContent = producto.category.toUpperCase();

    let precio = document.createElement("p");
    precio.textContent = producto.price + "€";

    let imagen = document.createElement("img");
    imagen.src = producto.image;

    let botonAñadir = document.createElement("button");
    botonAñadir.textContent = "Añadir a carrito";
    botonAñadir.id = producto.id;
    botonAñadir.addEventListener("click", añadirACarrito);

    tarjeta.append(nombre, categoria, precio, imagen, botonAñadir);
    contenedorProductos.appendChild(tarjeta);
}

function añadirACarrito() {
    let id = this.id;
    let encontrado = listaProductos.find((producto) => producto.id == id);
    let indice = listaCarrito.indexOf(encontrado);

    if (!listaCarrito.includes(encontrado)) {
        encontrado.quantity = 1;
        listaCarrito.push(encontrado);
    } else {
        listaCarrito[indice].quantity++;
    }

    carrito.innerHTML = "";
    let total = 0;

    listaCarrito.forEach((item) => {
        let tarjeta = crearTarjetaCarrito(item);
        carrito.appendChild(tarjeta);

        total += item.price * item.quantity;
    });

    precioTotal.innerHTML = total + "€";

    localStorage.setItem("carrito", JSON.stringify(listaCarrito));
}

function crearTarjetaCarrito(item) {
    let tarjeta = document.createElement("div");
    tarjeta.className = "cart-item";

    let nombre = document.createElement("h4");
    nombre.textContent = item.title;

    let cantidad = document.createElement("p");
    cantidad.textContent = "Cantidad: " + item.quantity;

    let precio = document.createElement("p");
    precio.textContent = "Precio: " + item.price + "€";

    tarjeta.append(nombre, cantidad, precio);

    return tarjeta;
}
