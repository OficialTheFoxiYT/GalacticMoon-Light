document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita recargar la página

  const username = document.getElementById('u').value.trim();
  const password = document.getElementById('p').value;

  // Buscamos al usuario dentro del array 'users' que viene de users.js
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    accesoExitoso(user.role); // Le pasamos el rol
  } else {
    accesoDenegado();
  }
});

function accesoExitoso(rol) {
  const container = document.querySelector('.login-container');
  container.innerHTML = `
    <h2 class="success-msg">✅ Acceso autorizado</h2>
    <p class="entrada">Bienvenido, rango <strong>${rol.toUpperCase()}</strong>.</p>
  `;
  document.body.classList.add(rol); // Aplicamos la clase visual para el fondo
}

function accesoDenegado() {
  alert('Acceso denegado. Verificá tus credenciales.');
}
