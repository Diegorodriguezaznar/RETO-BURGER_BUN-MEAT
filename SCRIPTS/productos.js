
/*Funcion para la ventana que aparece al pulsar un producto, con su info y nombre*/
function mostrarVentana(titulo, infoAdicional, imagen) {
    document.getElementById('tituloMenu').innerText = titulo;
    document.getElementById('informacionAdicional').innerText = infoAdicional;
    document.getElementById('imagenMenu').src = imagen;
    document.getElementById('ventanaEmergente').style.display = 'block';
}

function cerrarVentana() {
    document.getElementById('ventanaEmergente').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const menus = document.querySelectorAll('.menu-1 img, .guarnicion-1 img, .postre-1 img');
    const imagenesMenu = [
        '../IMG/Menu1.PNG', '../IMG/Menu1.PNG', '../IMG/Menu1.PNG',
        '../IMG/meatbacon.jpg', '../IMG/meatbacon.jpg', '../IMG/meatbacon.jpg',
        '../IMG/meatbacon.jpg', '../IMG/meatbacon.jpg' 
    ];
    menus.forEach(function(menu, index) {
        menu.addEventListener('click', function() {
            const titulo = this.parentElement.querySelector('p').innerText;
            const infoAdicional = ''; 
            const imagen = imagenesMenu[index];
            mostrarVentana(titulo, infoAdicional, imagen);
        });
    });
});

// Define un objeto para almacenar los productos en el carrito junto con su cantidad y su imagen
let carrito = {};

function agregarAlCarrito(titulo, precio, imagen) {
    // Verifica si el producto ya está en el carrito
    if (carrito.hasOwnProperty(titulo)) {
        // Si ya está en el carrito, actualiza la cantidad y el precio total
        carrito[titulo].cantidad++;
        carrito[titulo].precioTotal = carrito[titulo].cantidad * precio;
    } else {
        // Si es un nuevo producto, agrega una entrada al carrito
        carrito[titulo] = {
            cantidad: 1,
            precioTotal: precio,
            imagen: imagen
        };
    }
    // Actualiza el contenido del carrito en la interfaz
    mostrarCarrito();
}




/*Funciones para calcular el precio y los productos*/
function mostrarCarrito() {
    const carritoElemento = document.getElementById('carrito');

    const listaProductos = carritoElemento.querySelector('.lista-productos');

    const precioTotalElemento = carritoElemento.querySelector('.precio-total');
    if (precioTotalElemento) {
        precioTotalElemento.remove();
    }

    // Borra el contenido anterior de la lista de productos
    listaProductos.innerHTML = '';

    // Itera sobre los productos en el carrito y crea elementos para mostrarlos
    listaProductos.innerHTML = '';

    for (const [titulo, producto] of Object.entries(carrito)) {
        const productoElemento = document.createElement('li');
        productoElemento.textContent = `${titulo} - ${producto.cantidad} - ${producto.precioTotal}$`;
        listaProductos.appendChild(productoElemento);
    }

    // Calcula el precio total del carrito
    const precioTotalCarrito = Object.values(carrito).reduce((total, producto) => total + producto.precioTotal, 0);

    // Agrega el precio total al final del carrito

    const nuevoPrecioTotalElemento = document.createElement('div');
    nuevoPrecioTotalElemento.textContent = `Total Price: ${precioTotalCarrito} $`;
    nuevoPrecioTotalElemento.classList.add('precio-total');
    carritoElemento.appendChild(nuevoPrecioTotalElemento);
}



// Funcion click para los botones de "Comprar"
document.addEventListener('DOMContentLoaded', function() {
    const botonesComprar = document.querySelectorAll('.comprar-btn');

    botonesComprar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const contenedorProducto = boton.parentElement;
            const titulo = contenedorProducto.querySelector('p:nth-of-type(1)').innerText;
            const precio = parseFloat(contenedorProducto.querySelector('.precio').innerText.replace('$', ''));
            const imagen = contenedorProducto.querySelector('.menu-img, .guarnicion-img, .postre-img').src;

            // Agrega el producto al carrito
            agregarAlCarrito(titulo, precio, imagen);
        });
    });
});
