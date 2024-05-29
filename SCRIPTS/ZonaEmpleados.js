document.addEventListener('DOMContentLoaded', (event) => {
    const fetchClientes = async () => {
        const url = 'http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=CLIENTES.FIND_ALL';

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
        row.setAttribute('data-id', cliente.id_cliente);
        

        const { id_cliente, nombre_Cliente, apellidos_Cliente, gmail_cliente, num_telefono, Direccion } = cliente;


        row.innerHTML = `
            <td>${nombre_Cliente}</td>
            <td>${apellidos_Cliente}</td>
            <td>${gmail_cliente}</td>
            <td>${num_telefono}</td>
            <td>${Direccion}</td>
            <td>${id_cliente}</td>
            <td>
                <button class="eliminar-btn">Eliminar</button>
            </td>
        `;

        clientesBody.appendChild(row);


        row.querySelector('.eliminar-btn').addEventListener('click', () => {
            eliminarCliente(cliente.id_cliente);
        });
    };








    const eliminarCliente = async (id_cliente) => {
        const url = `http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=CLIENTES.DELETE&ID_CLIENTE=${id_cliente}`;
    
        try {
            const response = await fetch(url, {
                method: 'post',
                mode: 'no-cors'
            });
    
            await document.querySelector(`tr[data-id="${id_cliente}"]`).remove();
            console.log(`Cliente con ID ${id_cliente} eliminado correctamente.`);
        } catch (error) {
            console.error('Error al eliminar cliente:', error);
        }
    };

    const crearCliente = async () => {
        const id_cliente = document.getElementById('id_cliente').value;
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const gmail = document.getElementById('gmail').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;

        const data = {
            id_cliente: id_cliente,
            nombre_Cliente: nombre,
            apellidos_Cliente: apellidos,
            gmail_cliente: gmail,
            num_telefono: telefono,
            Direccion: direccion,
        };

        const url = `http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=CLIENTES.ADD&ID_CLIENTE=${id_cliente}&NOMBRE=${nombre}&APELLIDO=${apellidos}&GMAIL=${gmail}&NUM_TELEFONO=${telefono}&DIRECCION=${direccion}`;

        try {
            const response = await fetch(url, {
                method: 'POST', mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    'mode': 'no-cors'
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const nuevoCliente = await response.json();
            console.log('Nuevo cliente creado:', nuevoCliente);

            document.getElementById('nombre').value = '';
            document.getElementById('apellidos').value = '';
            document.getElementById('gmail').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('direccion').value = '';

            createCliente(nuevoCliente);
        } catch (error) {
            console.error('Error al crear cliente:', error);
        }
    };

    document.getElementById('crear-btn').addEventListener('click', crearCliente);

    fetchClientes();
});
