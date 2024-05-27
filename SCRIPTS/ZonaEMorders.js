document.addEventListener('DOMContentLoaded', (event) => {
    const fetchClientes = async () => {
        const url = 'http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=PRODUCTO.FIND_ALL';

        try {
            console.log('Fetching clients from:', url);  // Mensaje de depuración
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const clientes = await response.json();
            console.log('Clientes recibidos:', clientes);  // Verifica que los datos se están recibiendo correctamente
            clientes.forEach(createCliente);
        } catch (error) {
            console.error('Error fetching clientes:', error);
        }
    };

    const createCliente = (cliente) => {
        const clientesBody = document.getElementById('clientes-body');
        const row = document.createElement('tr');
        row.setAttribute('data-id', cliente.ID_Cliente); // Añadimos un atributo data-id con el ID del cliente

        // Utiliza las claves del JSON que proporcionaste
        const { id_pedido, id_cliente, fecha, id_empleado} = cliente;

        row.innerHTML = `
            <td>${id_pedido}</td>
            <td>${id_cliente}</td>
            <td>${fecha}</td>
            <td>${id_empleado}</td>
            <td>
                <button class="eliminar-btn">Eliminar</button>
            </td>
        `;

        clientesBody.appendChild(row);

        // Añadir evento para el botón de eliminar
        row.querySelector('.eliminar-btn').addEventListener('click', () => {
            eliminarCliente(cliente.ID_Cliente);
        });
    };

   
    fetchClientes();
});
