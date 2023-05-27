// Comprobamos si hay un usuario almacenado en localStorage
if (localStorage.getItem('nombreUsuario')) {
    document.getElementById('nombre-usuario').textContent = localStorage.getItem('nombreUsuario');
    document.getElementById('cerrar-sesion').style.display = 'inline-block';
}

function iniciarSesion() {
    var nombre = document.getElementById('nombre').value;

    if (nombre !== '') {
        document.getElementById('nombre-usuario').textContent = nombre;
        localStorage.setItem('nombreUsuario', nombre);
        document.getElementById('cerrar-sesion').style.display = 'inline-block';
        alert('Bienvenido, ' + nombre);
    }
}

function cerrarSesion() {
    document.getElementById('nombre-usuario').textContent = 'Usuario sin identificar';
    localStorage.removeItem('nombreUsuario');
    document.getElementById('cerrar-sesion').style.display = 'none';
    alert('Sesión cerrada');
}