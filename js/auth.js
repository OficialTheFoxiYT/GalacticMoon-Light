document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita recargar la página

  const username = document.getElementById('u').value.trim();
  const password = document.getElementById('p').value;

  // Lista de usuarios autorizados
  const allowedUsers = {
    "admin": "secreto123",
    "foxito": "galaxy2025",
    "staff01": "orbitalAccess"
  };

  // Validación
  if (allowedUsers[username] === password) {
    accesoExitoso();
  } else {
    accesoDenegado();
  }
});

function accesoExitoso() {
  const container = document.querySelector('.login-container');
  container.innerHTML = `
    <h2 class="success-msg">✅ Acceso autorizado</h2>
    <p class="entrada">Bienvenido al sistema, tripulante.</p>
  `;

  document.body.classList.add('acceso-aceptado');
}

function accesoDenegado() {
  alert('Acceso denegado. Verificá tus credenciales.');
}
