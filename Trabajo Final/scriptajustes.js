// Para almacenar el usuario
if (sessionStorage.getItem('usuario')) {
    mostrarSesionActiva();
}

function iniciarSesion() {
    var nombre = document.getElementById('nombreUsuario').value;
    sessionStorage.setItem('usuario', nombre);
    if (nombre === "") {
        alert("¡Tienes que escribir un nombre!");
    } else{
    mostrarSesionActiva();
    alert('Te doy la bienvenida, '+nombre)
}
}

function cerrarSesion() {
    sessionStorage.removeItem('usuario');
    mostrarSesionInactiva();
    alert('Sesión cerrada');
}

function mostrarSesionActiva() {
    var usuario = sessionStorage.getItem('usuario');
    document.getElementById('usuario').textContent = 'Bienvenido, ' + usuario;
    document.getElementById('cerrarSesionBtn').style.display = 'block';
}

function mostrarSesionInactiva() {
    document.getElementById('usuario').textContent = 'Usuario sin identificar';
    document.getElementById('cerrarSesionBtn').style.display = 'none';
}




        // Para que se muestre modo claro u oscuro
        if (localStorage.getItem('modo') === 'oscuro') {
            document.documentElement.setAttribute('data-modo', 'oscuro');
        }
  
        function cambiarModo() {
            var modoActual = document.documentElement.getAttribute('data-modo');
            var nuevoModo = (modoActual === 'claro') ? 'oscuro' : 'claro';
            document.documentElement.setAttribute('data-modo', nuevoModo);
            localStorage.setItem('modo', nuevoModo);
        }


        //Para cambiar color y tamaño de letra
var fontSize = localStorage.getItem('fontSize');
//var fontColor = localStorage.getItem('fontColor');

// Establecer valores iniciales en los selectores
document.getElementById('fontSizeSelect').value = fontSize;
//document.getElementById('fontColorInput').value = fontColor;

function aplicarCambios() {
    fontSize = document.getElementById('fontSizeSelect').value;
    //fontColor = document.getElementById('fontColorInput').value;

    // Actualizar estilos
    document.body.style.fontSize = fontSize;
    //document.body.style.color = fontColor;

    // Guardar valores en localStorage
    localStorage.setItem('fontSize', fontSize);
    //localStorage.setItem('fontColor', fontColor);
}
