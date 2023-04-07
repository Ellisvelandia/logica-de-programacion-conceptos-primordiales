const mundial = document.querySelector(".mundial");

let anhoMundial = 1930;
let limite = parseInt(prompt("Ingrese el año limite para calcular"))

const licencia = (mensaje) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
   <p>${mensaje}</p>
  `;
  mundial.appendChild(newDiv);
};

for (let i = anhoMundial; i < limite; i++) {
  licencia("Hubo mundial de la FIFA en el año" + i);
  i += +3;
}
