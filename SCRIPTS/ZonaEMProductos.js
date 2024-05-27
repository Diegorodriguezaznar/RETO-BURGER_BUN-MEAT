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
        const { id_producto, nombreProducto, Descripcion, id_categoria_producto, precio } = producto;

        row.innerHTML = `
            <td>${id_producto}</td>
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
        const url = `http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=PRODUCTO.DELETE&id=${id_producto}`;

        try {
            const response = await fetch(url, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log(`Producto con id ${id_producto} eliminado.`);
            // Remover la fila de la tabla
            const rowToDelete = document.querySelector(`tr[data-id='${id_producto}']`);
            rowToDelete.remove();
        } catch (error) {
            console.error('Error eliminando producto:', error);
        }
    };

    fetchProductos();
});
