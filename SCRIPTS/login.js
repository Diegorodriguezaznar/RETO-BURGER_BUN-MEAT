document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario
    
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Redirección basada en credenciales específicas
    if (email === 'admin@example.com' && password === 'admin123') {
        window.location.href = '../HTML/ZonaEMProductos.html'; // Redirige a la página especificada
    } else {
        window.location.href = '../HTML/finale.html'; // Redirige a otra página para cualquier otro caso
    }
});
