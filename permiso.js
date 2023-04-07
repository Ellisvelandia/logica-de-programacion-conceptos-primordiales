const permisoConducir = document.querySelector(".permisoConducir");

let edadPermitida = 18;
let edad = parseInt(prompt("¿Cuál es tu edad?"));
let tieneLicencia = prompt("¿Tienes licencia? Responde si o no");

const licencia = (mensaje) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
   <p>${mensaje}</p>
  `;
  permisoConducir.appendChild(newDiv);
};

if (edad >= 18 && tieneLicencia === "si") {
  licencia("Puedes conducir ");
} else if (edad < 18 && tieneLicencia === "no") {
  licencia(
    `No puedes conducir la edad minima es ${edadPermitida} y tampoco tiene licencia de conducion`
  );
} else {
  licencia("No puedes conducir");
}
