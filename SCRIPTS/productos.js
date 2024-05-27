
let carrito = {};

// METER PRODUCTOS AL CARRITO
function agregarAlCarrito(titulo, precio, imagen) {
    //UN IF QUE SE ENCARGA DE IDENTIFICAR SI EL PRODUCTO YA ESTA O NO Y SI ESTA EL PRECIO CAMBIA Y LA CANTIDAD SE ELEVA ej.(2 hamburguesas de 1€ son 2€)
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

// Función para mostrar el contenido del carrito en la interfaz
function mostrarCarrito() {
    const carritoElemento = document.getElementById('carrito');
    const listaProductos = carritoElemento.querySelector('.lista-productos');
    const precioTotalElemento = carritoElemento.querySelector('.precio-total');

    // Borra el precio total anterior si existe
    if (precioTotalElemento) {
        precioTotalElemento.remove();
    }

    // Borra el contenido anterior de la lista de productos
    listaProductos.innerHTML = '';

    // Itera sobre los productos en el carrito y crea elementos para mostrarlos
    for (const [titulo, producto] of Object.entries(carrito)) {
        const productoElemento = document.createElement('li');
        productoElemento.textContent = `${titulo} - ${producto.cantidad} - ${producto.precioTotal}$`;
        listaProductos.appendChild(productoElemento);
    }

    
    // PRECIO FINAL
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

    carritoHeaderButton.addEventListener('click', () => {
        carritoBodyDiv.style.display = carritoBodyDiv.style.display === 'none' ? 'block' : 'none';
    });

    fetchProductos();
});








document.addEventListener('DOMContentLoaded', (event) => {
    const url = 'http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=PRODUCTO.FIND_ALL';
    const fetchProductos = async () => {
        

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const productos = await response.json();
            console.log(productos);
            productos.forEach(createProducto);
        } catch (error) {
            console.error('Error fetching productos:', error);
        }
    };

    const createProducto = (producto) => {
        const menu_list = document.querySelector('.apartado-menus');
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

        menu_list.appendChild(card);

        card.querySelector('.comprar-btn').addEventListener('click', () => {
            agregarAlCarrito(nombreProducto, precio, Imagen);
        });
    };

    const agregarAlCarrito = (titulo, precio, imagen) => {
        // Aquí puedes implementar la lógica para agregar el producto al carrito
        console.log('Producto añadido al carrito:', { titulo, precio, imagen });
    };

    fetchProductos();
});
