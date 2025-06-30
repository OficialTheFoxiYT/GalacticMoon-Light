
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const u = document.getElementById("u").value;
  const p = document.getElementById("p").value;

  fetch("data/users.json")
    .then(res => res.json())
    .then(users => {
      const user = users.find(user => user.username === u && user.password === p);
      if (user) {
        sessionStorage.setItem("username", user.username);
        sessionStorage.setItem("role", user.role);
        window.location.href = "dashboard.html";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
});
