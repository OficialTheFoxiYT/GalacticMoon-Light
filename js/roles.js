
const role = sessionStorage.getItem("role");
document.querySelectorAll(".panel").forEach(panel => {
  if (!panel.classList.contains(role)) {
    panel.style.display = "none";
  }
});
