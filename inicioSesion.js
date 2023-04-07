const inicio = document.querySelector(".inicio");

let inicioDeSesionRegistrado = "alura";
let intentos = 3;
var contrasenhaRegistrada = "alura321";

let login = false;

const inicioDeSesion = (mensaje) => {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.innerHTML = `
   <p>${mensaje}</p>
  `;
  inicio.appendChild(nuevoDiv);
};

for (let contador = 1; contador <= intentos; contador++) {
  let inicioDeSesionIngresado = prompt("Ingrese su usuario");
  let contrasenhaIngresada = prompt("Ingrese su contraseña");

  if (
    inicioDeSesionRegistrado == inicioDeSesionIngresado &&
    contrasenhaRegistrada == contrasenhaIngresada
  ) {
    alert(`Bienvenido al sistema ${inicioDeSesionRegistrado}`);
    inicioDeSesion(`Inicio de sesion ${inicioDeSesionRegistrado}`);
    login = true;
    break;
  } else {
    alert("inicio de sesión inválido. Favor intente de nuevo");
  }
}

if (!login) {
  inicioDeSesion(`Error recargue la pagina`);
}
