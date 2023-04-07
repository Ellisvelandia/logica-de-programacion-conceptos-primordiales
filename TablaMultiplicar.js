const tablaMultiplicar = document.querySelector(".tablaMultiplicar");

const resultado = (mensaje) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
   <p>${mensaje}</p>
  `;
  tablaMultiplicar.appendChild(newDiv);
};

let numeroRandom = parseInt(prompt("ingrese el numero para ver su tabla"));

for (let multiplacador = 0; multiplacador <= 10; multiplacador++) {
  resultado(numeroRandom * multiplacador);
}
