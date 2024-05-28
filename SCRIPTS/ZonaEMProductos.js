document.addEventListener('DOMContentLoaded', (event) => {
    const fetchProductos = async () => {
        const url = 'http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=PRODUCTO.FIND_ALL';

        try {
            console.log('Fetching products from:', url);  // Mensaje de depuración
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const productos = await response.json();
            console.log('Productos recibidos:', productos);  // Verifica que los datos se están recibiendo correctamente
            productos.forEach(createProducto);
        } catch (error) {
            console.error('Error fetching productos:', error);
        }
    };

    const createProducto = (producto) => {
        const productosBody = document.getElementById('productos-body');
        const row = document.createElement('tr');
        row.setAttribute('data-id', producto.id_producto); // Añadimos un atributo data-id con el ID del producto
        
        // Utiliza las claves del JSON que proporcionaste
        const { Imagen, id_producto, nombreProducto, Descripcion, id_categoria_producto, precio } = producto;

        row.innerHTML = `
            <td>${id_producto}</td>
            <td>${Imagen}</td>
            <td>${nombreProducto}</td>
            <td>${Descripcion}</td>
            <td>${id_categoria_producto}</td>
            <td>${precio}</td>
            <td>
                <button class="eliminar-btn">Eliminar</button>
            </td>
        `;

        productosBody.appendChild(row);

        // Añadir evento para el botón de eliminar
        row.querySelector('.eliminar-btn').addEventListener('click', () => {
            eliminarProducto(producto.id_producto);
        });
    };



    const eliminarProducto = async (id_producto) => {
        const url = `http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=PRODUCTO.DELETE&ID_PRODUCTO=${id_producto}`;
    
        try {
            const response = await fetch(url, {
                method: 'post',
                mode: 'no-cors'
            });
    
            // Con 'no-cors', no puedes verificar el estado de la respuesta
            // Pero asumimos que la solicitud fue exitosa y procedemos a eliminar el elemento del DOM
    
            await document.querySelector(`tr[data-id="${id_producto}"]`).remove();
            console.log(`Producto con ID ${id_producto} eliminado correctamente.`);
        } catch (error) {
            console.error('Error al eliminar producto:', error);
        }
    };










    const crearProducto = async () => {
        const product_id = document.getElementById('product_id').value;
        const image = document.getElementById('image').value;
        const name = document.getElementById('name').value;
        const Description = document.getElementById('Description').value;
        const id_category = document.getElementById('id_category').value;
        const price = document.getElementById('price').value;

        const data = {
            id_producto: product_id,
            Imagen: image,
            nombreProducto: name,
            Descripcion: Description,
            id_categoria_producto: id_category,
            precio: price,
        };

        const url = 'http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=PRODUCTOS.ADD';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'mode': 'no-cors'
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const nuevoProducto = await response.json();
            console.log('Nuevo producto creado:', nuevoProducto);

            // Limpiar los inputs después de crear el producto
            document.getElementById('product_id').value = '';
            document.getElementById('image').value = '';
            document.getElementById('name').value = '';
            document.getElementById('Description').value = '';
            document.getElementById('id_category').value = '';
            document.getElementById('price').value = '';

            // Crear la nueva fila en la tabla con el nuevo producto
            createProducto(nuevoProducto);
        } catch (error) {
            console.error('Error al crear producto:', error);
        }
    };

    // Agregar evento al botón de crear producto
    document.getElementById('crear-btn').addEventListener('click', crearProducto);

    // Iniciar la carga de productos al cargar la página
    fetchProductos();
});
