// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ

import "./style.css";

// Obtener el formulario de registro
const $formRegister = document.getElementById("register-form");

// Añadir un evento de submit al formulario
$formRegister.addEventListener("submit", async (e) => {
  // Evitar que el formulario recargue la página
  e.preventDefault();

  // Crear un objeto FormData con los datos del formulario
  const formData = new FormData($formRegister);

  // Convertir el objeto FormData a un objeto plano
  const entries = Object.fromEntries(formData.entries());

  // Realizar una solicitud POST a la API de inicio de sesión
  fetch("http://localhost:4321/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entries),
  }).then((response) => {
    response.json()
  });
});
