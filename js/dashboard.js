function logout() {
  // Redirige al login limpiamente
  window.location.href = "index.html";
}

const rol = localStorage.getItem('rol');
const usuario = localStorage.getItem('usuario');

// Verificamos que solo el OWNER pueda estar acá
if (rol !== 'owner') {
  alert('Acceso denegado. Esta consola es solo para el OWNER.');
  window.location.href = 'index.html';
}

// Si querés mostrar el nombre, podés ponerlo en algún elemento con ID:
const bienvenida = document.querySelector('.welcome');
if (bienvenida && usuario) {
  bienvenida.innerHTML = `Bienvenido, <strong>${usuario.toUpperCase()}</strong>. Control total concedido.`;
}

