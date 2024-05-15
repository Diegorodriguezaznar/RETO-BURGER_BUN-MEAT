function mostrarVentana(titulo, infoAdicional, imagen) {
    document.getElementById('tituloMenu').innerText = titulo;
    document.getElementById('informacionAdicional').innerText = infoAdicional;
    document.getElementById('imagenMenu').src = imagen;
    document.getElementById('ventanaEmergente').style.display = 'block';
}

// Función para cerrar la ventana emergente
function cerrarVentana() {
    document.getElementById('ventanaEmergente').style.display = 'none';
}

// Variables para almacenar los productos en el carrito
const carrito = {};

// Función para agregar un producto al carrito
function agregarAlCarrito(titulo, precio, imagen) {
    // Genera un identificador único para el producto
    const idProducto = titulo.replace(/\s+/g, '-').toLowerCase();

    // Verifica si el producto ya está en el carrito
    if (carrito.hasOwnProperty(idProducto)) {
        // Si ya está en el carrito, actualiza la cantidad y el precio total
        carrito[idProducto].cantidad++;
        carrito[idProducto].precioTotal += precio;
    } else {
        // Si es un nuevo producto, agrega una entrada al carrito
        carrito[idProducto] = {
            titulo: titulo,
            cantidad: 1,
            precioTotal: precio,
            imagen: imagen
        };
    }
    // Actualiza el contenido del carrito en la interfaz
    mostrarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(idProducto) {
    if (carrito[idProducto].cantidad > 1) {
        // Si hay más de 1 producto, disminuye la cantidad
        carrito[idProducto].cantidad--;
        carrito[idProducto].precioTotal -= carrito[idProducto].precioTotal / (carrito[idProducto].cantidad + 1);
    } else {
        // Si solo hay 1 producto, elimina completamente la entrada del carrito
        delete carrito[idProducto];
    }
    // Actualiza el contenido del carrito en la interfaz
    mostrarCarrito();
}

// Función para calcular el precio total del carrito
function calcularPrecioTotalCarrito() {
    let precioTotalCarrito = 0;
    for (const idProducto in carrito) {
        precioTotalCarrito += carrito[idProducto].precioTotal;
    }
    return precioTotalCarrito;
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const carritoElemento = document.getElementById('carrito');
    const listaProductos = carritoElemento.querySelector('.lista-productos');
    let precioTotalCarrito = 0;

    // Borra el contenido anterior de la lista de productos
    listaProductos.innerHTML = '';

    for (const idProducto in carrito) {
        const producto = carrito[idProducto];
        const productoElemento = document.createElement('li');
        productoElemento.textContent = `${producto.titulo} - ${producto.cantidad} - ${producto.precioTotal}$`;

        // Agrega un botón de eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.classList.add('eliminar-btn');
        productoElemento.appendChild(eliminarBtn);

        // Almacena el id del producto como un atributo de datos
        productoElemento.dataset.idProducto = idProducto;

        listaProductos.appendChild(productoElemento);

        // Actualiza el precio total del carrito
        precioTotalCarrito += producto.precioTotal;
    }

    // Agrega el precio total al final del carrito
    const precioTotalElemento = carritoElemento.querySelector('.precio-total');
    if (precioTotalElemento) {
        precioTotalElemento.textContent = `Total Price: ${precioTotalCarrito} $`;
    } else {
        const nuevoPrecioTotalElemento = document.createElement('div');
        nuevoPrecioTotalElemento.textContent = `Total Price: ${precioTotalCarrito} $`;
        nuevoPrecioTotalElemento.classList.add('precio-total');
        carritoElemento.appendChild(nuevoPrecioTotalElemento);
    }
}

// Evento clic para los botones de eliminar del carrito
document.addEventListener('DOMContentLoaded', function() {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.addEventListener('click', function(event) {
        if (event.target.classList.contains('eliminar-btn')) {
            const idProducto = event.target.parentElement.dataset.idProducto;
            eliminarDelCarrito(idProducto);
        }
    });
});

// Evento clic para los botones de "Comprar"
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