document.addEventListener("DOMContentLoaded", () => {

  // === 1. MODO CLARO / OSCURO ===
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // El tema guardado se aplica siempre, aunque la página no tenga botón
  const savedTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-bs-theme", savedTheme);

  // Solo si esta página tiene el botón (el login no lo tiene)
  if (themeToggle) {
    themeToggle.textContent = savedTheme === "dark" ? "Modo claro" : "Modo oscuro";

    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      htmlElement.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      themeToggle.textContent = newTheme === "dark" ? "Modo claro" : "Modo oscuro";
    });
  }

  // === 2. VALIDACIÓN DEL FORMULARIO DE LOGIN ===
  const form = document.getElementById("login-form");

  // Solo si esta página tiene formulario (el index no lo tiene)
  if (form) {
    form.addEventListener("submit", (e) => {
      // Si fallan los required, minlength, type="email"...
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        alert("¡Formulario enviado con éxito!");
      }

      // Bootstrap pinta los campos en rojo o verde con esta clase
      form.classList.add("was-validated");
    }, false);
  }
});