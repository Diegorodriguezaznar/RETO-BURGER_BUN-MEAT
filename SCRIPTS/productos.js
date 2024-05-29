///////////////////////////////////////CARRITO////////////////////////////////////////////////////////
let carrito = {};

// METER PRODUCTOS AL CARRITO
function agregarAlCarrito(titulo, precio, imagen) {
    console.log(`Agregar al carrito: ${titulo}, ${precio}, ${imagen}`);
    if (carrito.hasOwnProperty(titulo)) {
        carrito[titulo].cantidad++;
        carrito[titulo].precioTotal = carrito[titulo].cantidad * precio;
    } else {
        carrito[titulo] = {
            cantidad: 1,
            precioTotal: precio,
            imagen: imagen
        };
    }
    mostrarCarrito();
}

// Función para reducir la cantidad de un producto o eliminarlo del carrito
function eliminarDelCarrito(titulo) {
    if (carrito.hasOwnProperty(titulo)) {
        if (carrito[titulo].cantidad > 1) {
            carrito[titulo].cantidad--;
            carrito[titulo].precioTotal -= carrito[titulo].precioTotal / (carrito[titulo].cantidad + 1);
        } else {
            delete carrito[titulo];
        }
        mostrarCarrito();
    }
}

// Función para mostrar el contenido del carrito en la interfaz
function mostrarCarrito() {
    const carritoElemento = document.getElementById('carrito');
    if (!carritoElemento) {
        console.error('Elemento #carrito no encontrado');
        return;
    }
    
    const listaProductos = carritoElemento.querySelector('.lista-productos');
    if (!listaProductos) {
        console.error('.lista-productos no encontrado');
        return;
    }

    const precioTotalElemento = carritoElemento.querySelector('.precio-total');

    if (precioTotalElemento) {
        precioTotalElemento.remove();
    }

    listaProductos.innerHTML = '';

    for (const [titulo, producto] of Object.entries(carrito)) {
        const productoElemento = document.createElement('li');
        productoElemento.textContent = `${titulo} - ${producto.cantidad} - ${producto.precioTotal}$`;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('eliminar-btn');
        botonEliminar.addEventListener('click', () => eliminarDelCarrito(titulo));

        productoElemento.appendChild(botonEliminar);
        listaProductos.appendChild(productoElemento);
    }

    const precioTotalCarrito = Object.values(carrito).reduce((total, producto) => total + producto.precioTotal, 0);

    const nuevoPrecioTotalElemento = document.createElement('div');
    nuevoPrecioTotalElemento.textContent = `Total Price: ${precioTotalCarrito} $`;
    nuevoPrecioTotalElemento.classList.add('precio-total');
    carritoElemento.appendChild(nuevoPrecioTotalElemento);
}

// Evento para mostrar/ocultar el carrito
document.addEventListener('DOMContentLoaded', function() {
    const carritoHeaderButton = document.querySelector('.carrito-header');
    const carritoBodyDiv = document.querySelector('.carrito-body');

    if (carritoHeaderButton && carritoBodyDiv) {
        carritoHeaderButton.addEventListener('click', () => {
            carritoBodyDiv.style.display = carritoBodyDiv.style.display === 'none' ? 'block' : 'none';
        });
    } else {
        console.error('.carrito-header o .carrito-body no encontrado');
    }

    fetchProductos();
});

// FETCH CON LA API DE JSON DE LA BASE DE DATOS
async function fetchProductos() {
    const url = 'http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=PRODUCTO.FIND_ALL';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const productos = await response.json();
        console.log('Productos fetched:', productos);
        productos.forEach(createProducto);
    } catch (error) {
        console.error('Error fetching productos:', error);
    }
}

function createProducto(producto) {
    const menuList = document.querySelector('.apartado-menus');
    if (!menuList) {
        console.error('.apartado-menus no encontrado');
        return;
    }

    const card = document.createElement('li');
    card.classList.add('card');

    const { Imagen, nombreProducto, precio, Descripcion } = producto;

    card.innerHTML = `
        <div class="menu-1">
            <img src="${Imagen}" alt="${nombreProducto}" class="menu-img">
            <p>${nombreProducto}</p>
            <p class="precio">$${precio.toFixed(2)}</p>
            <div class="descripcion">${Descripcion}</div>
            <button class="comprar-btn">Comprar</button>
        </div>
    `;

    menuList.appendChild(card);

    const comprarBtn = card.querySelector('.comprar-btn');
    if (comprarBtn) {
        comprarBtn.addEventListener('click', () => {
            agregarAlCarrito(nombreProducto, precio, Imagen);
        });
    } else {
        console.error('.comprar-btn no encontrado');
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////





