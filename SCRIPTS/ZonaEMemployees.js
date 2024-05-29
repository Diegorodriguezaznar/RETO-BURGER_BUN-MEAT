document.addEventListener('DOMContentLoaded', (event) => {
    const fetchEmpleados = async () => {
        const url = 'http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=EMPLEADOS.FIND_ALL';

        try {
            console.log('Fetching empleados from:', url);  
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const empleados = await response.json();
            console.log('Empleados recibidos:', empleados);  
            empleados.forEach(createEmpleado);
        } catch (error) {
            console.error('Error fetching empleados:', error);
        }
    };

    const createEmpleado = (empleado) => {
        const empleadosBody = document.getElementById('empleados-body');
        const row = document.createElement('tr');
        row.setAttribute('data-id', empleado.id_empleado);

        const { id_empleado, nombre_empleado, apellido_empleado, gmail_empleado, num_telefono, id_categoriaEmpleado, contrasena } = empleado;

        row.innerHTML = `
            <td>${id_empleado}</td>
            <td>${nombre_empleado}</td>
            <td>${apellido_empleado}</td>
            <td>${gmail_empleado}</td>
            <td>${num_telefono}</td>
            <td>${id_categoriaEmpleado}</td>
            <td>${contrasena}</td>
            <td>
                <button class="eliminar-btn">Eliminar</button>
            </td>
        `;

        empleadosBody.appendChild(row);

        row.querySelector('.eliminar-btn').addEventListener('click', () => {
            eliminarEmpleado(empleado.id_empleado);
        });
    };

    const eliminarEmpleado = async (id_empleado) => {
        const url = `http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=EMPLEADOS.DELETE&ID_EMPLEADO=${id_empleado}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'no-cors'
            });

            await document.querySelector(`tr[data-id="${id_empleado}"]`).remove();
            console.log(`Producto con ID ${id_empleado} eliminado correctamente.`);
        } catch (error) {
            console.error('Error al eliminar producto:', error);
        }
    };

    const crearEmpleado = async () => {
        const empleado_id = document.getElementById('empleado_id').value;
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const id_categoria_empleado = document.getElementById('id_categoria_empleado').value;
        const contrasena = document.getElementById('contrasena').value;


        const data = {
            id_empleado: empleado_id,
            nombre_empleado: nombre,
            apellido_empleado: apellidos,
            gmail_empleado: email,
            num_telefono: telefono,
            id_categoriaEmpleado: id_categoria_empleado,
            contrasena: contrasena,
        };

        const url = `http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=EMPLEADOS.ADD&ID_EMPLEADO=${empleado_id}&NOMBRE=${nombre}&APELLIDO=${apellidos}&GMAIL=${email}&NUM_TELEFONO=${telefono}&ID_CATEGORIAEMPLEADO=${id_categoria_empleado}&CONTRASENA=${contrasena}`;

        try {
            const response = await fetch(url, {
                method: 'POST',mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const nuevoEmpleado = await response.json();
            console.log('Nuevo empleado creado:', nuevoEmpleado);

            document.getElementById('empleado_id').value = '';
            document.getElementById('nombre').value = '';
            document.getElementById('apellidos').value = '';
            document.getElementById('email').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('id_categoria_empleado').value = '';
            document.getElementById('contrasena').value = '';

            createEmpleado(nuevoEmpleado);
        } catch (error) {
            console.error('Error al crear empleado:', error);
        }
    };

    document.getElementById('crear-btn').addEventListener('click', crearEmpleado);

    fetchEmpleados();
    
});
