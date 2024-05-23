
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
    carritoElemento.children[1].appendChild(nuevoPrecioTotalElemento);
}



let carritoHeaderButton // es un div con función de botón
let carritoBodyDiv

// Funcion click para los botones de "Comprar"
document.addEventListener('DOMContentLoaded', function() {
    const botonesComprar = document.querySelectorAll('.comprar-btn');
    carritoHeaderButton = document.getElementsByClassName("carrito-header")[0]
    carritoBodyDiv = document.getElementsByClassName("carrito-body")[0]

    carritoHeaderButton.addEventListener("click", () => {
        if (carritoBodyDiv.style.display != "none") {
            carritoBodyDiv.style.display = "none"
        } else {carritoBodyDiv.style.display = "block"}
    })

    botonesComprar.forEach(function(boton) {
        console.log(boton)
        boton.addEventListener('click', function() {
            const contenedorProducto = boton.parentElement;
            const titulo = contenedorProducto.querySelector('p:nth-of-type(1)').innerText;
            console.log(titulo)
            const precio = parseFloat(contenedorProducto.querySelector('.precio').innerText.replace('$', ''));
            const imagen = contenedorProducto.querySelector('.menu-img, .guarnicion-img, .postre-img').src;

            // Agrega el producto al carrito
            agregarAlCarrito(titulo, precio, imagen);
        });
    });
});








document.addEventListener('DOMContentLoaded', (event) => {
    const fetchProductos = async () => {
        const url = 'http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=PRODUCTO.FIND_ALL';

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
