document.addEventListener('DOMContentLoaded', (event) => {
    const fetchEmpleados = async () => {
        const url = 'http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=EMPLEADOS.FIND_ALL';

        try {
            console.log('Fetching empleados from:', url);  // Mensaje de depuración
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const empleados = await response.json();
            console.log('Empleados recibidos:', empleados);  // Verifica que los datos se están recibiendo correctamente
            empleados.forEach(createEmpleado);
        } catch (error) {
            console.error('Error fetching empleados:', error);
        }
    };

    const createEmpleado = (empleado) => {
        const empleadosBody = document.getElementById('empleados-body');
        const row = document.createElement('tr');
        row.setAttribute('data-id', empleado.id_empleado); // Añadimos un atributo data-id con el ID del empleado

        // Utiliza las claves del JSON que proporcionaste
        const { id_empleado, nombre_empleado, apellido_empleado, gmail_empleado, num_telefono, id_categoriaEmpleado, contrasena } = empleado;

        row.innerHTML = `
            <td>${nombre_empleado}</td>
            <td>${apellido_empleado}</td>
            <td>${gmail_empleado}</td>
            <td>${num_telefono}</td>
            <td>${id_empleado}</td>
            <td>${id_categoriaEmpleado}</td>
            <td>${contrasena}</td>
            <td>
                <button class="eliminar-btn">Eliminar</button>
            </td>
        `;

        empleadosBody.appendChild(row);

        // Añadir evento para el botón de eliminar
        row.querySelector('.eliminar-btn').addEventListener('click', () => {
            eliminarEmpleado(empleado.id_empleado);
        });
    };

    const eliminarEmpleado = async (id_empleado) => {
        const url = `http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=EMPLEADOS.DELETE&ID_EMPLEADO=${id_empleado}`;

        try {
            const response = await fetch(url, {
                method: 'post',
                mode: 'no-cors'
            });

            // Con 'no-cors', no puedes verificar el estado de la respuesta
            // Pero asumimos que la solicitud fue exitosa y procedemos a eliminar el elemento del DOM

            await document.querySelector(`tr[data-id="${id_empleado}"]`).remove();
            console.log(`Empleado con ID ${id_empleado} eliminado correctamente.`);
        } catch (error) {
            console.error('Error al eliminar empleado:', error);
        }
    };

    const crearEmpleado = async () => {
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;

        const data = {
            nombre_empleado: nombre,
            apellido_empleado: apellidos,
            gmail_empleado: email,
            num_telefono: telefono,
            contrasena: direccion,
        };

        const url = 'http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=EMPLEADOS.ADD';

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
            const nuevoEmpleado = await response.json();
            console.log('Nuevo empleado creado:', nuevoEmpleado);

            // Limpiar los inputs después de crear el empleado
            document.getElementById('nombre').value = '';
            document.getElementById('apellidos').value = '';
            document.getElementById('email').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('direccion').value = '';

            // Crear la nueva fila en la tabla con el nuevo empleado
            createEmpleado(nuevoEmpleado);
        } catch (error) {
            console.error('Error al crear empleado:', error);
        }
    };

    // Agregar evento al botón de crear empleado
    document.getElementById('crear-btn').addEventListener('click', crearEmpleado);

    // Iniciar la carga de empleados al cargar la página
    fetchEmpleados();
});
