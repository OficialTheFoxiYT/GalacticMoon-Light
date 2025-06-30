document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('u').value.trim();
  const password = document.getElementById('p').value;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem('rol', user.role);   // Guardamos rol
    localStorage.setItem('usuario', user.username); // Guardamos nombre
    window.location.href = 'dashboard.html';  // Redireccionamos al panel
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
  const form = document.getElementById('loginForm');

  // Si ya hay mensaje, eliminá para evitar duplicación
  const existingError = document.querySelector('.error-msg');
  if (existingError) existingError.remove();

  // Crear mensaje de error
  const error = document.createElement('p');
  error.classList.add('error-msg');
  error.innerHTML = '❌ <strong>Acceso denegado:</strong> Verificá tus credenciales.';
  form.appendChild(error);

  // Aplicar clase de animación
  form.classList.add('denied');

  // Remover clase animada después de 500ms
  setTimeout(() => {
    form.classList.remove('denied');
  }, 500);
}
