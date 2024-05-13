<?php
// Establecer conexión con la base de datos (aquí necesitarás colocar tus propias credenciales de conexión)
$conexion = new mysqli("nombre_servidor", "usuario", "contraseña", "nombre_base_datos");

// Verificar conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Consulta SQL para obtener los productos
$sql = "SELECT nombre, precio FROM Productos";

$resultado = $conexion->query($sql);

// Crear un array para almacenar los datos
$productos = array();

if ($resultado->num_rows > 0) {
    // Obtener cada fila de resultados y almacenarla en el array
    while ($fila = $resultado->fetch_assoc()) {
        $productos[] = $fila;
    }
}

// Convertir el array a formato JSON y devolverlo
echo json_encode($productos);

// Cerrar conexión
$conexion->close();
?>
