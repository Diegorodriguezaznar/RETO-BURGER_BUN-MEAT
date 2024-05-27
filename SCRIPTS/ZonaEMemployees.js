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
        const url = `http://localhost:8080/RETO_BACK_BIEN/Controller?ACTION=EMPLEADO.DELETE&id=${id_empleado}`;

        try {
            const response = await fetch(url, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log(`Empleado con id ${id_empleado} eliminado.`);
            const rowToDelete = document.querySelector(`tr[data-id='${id_empleado}']`);
            rowToDelete.remove();
        } catch (error) {
            console.error('Error eliminando empleado:', error);
        }
    };

    fetchEmpleados();
});
