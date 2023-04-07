const task1 = document.querySelector(".task1");

let victorias = parseInt(prompt("Informe la cantidad de victorias"));
let empates = parseInt(prompt("Informe la cantidad de puntos"));
puntosTotal = victorias * 3 + empates;

function imprimir(frase) {
  const calculo = document.createElement("div");
  calculo.innerHTML = `
<p>${frase}</p>
`;
  task1.appendChild(calculo);
}

if (puntosTotal > 28) {
  imprimir("El equipo esta mejor que el año pasado " + puntosTotal);
} else if (puntosTotal < 28) {
  imprimir("El equipo esta peor que el año pasado " + puntosTotal);
} else if (puntosTotal === 28) {
  imprimir("El equipo esta igual que el año pasado " + puntosTotal);
} else {
  imprimir("El total de los puntos del equipo es " + puntosTotal);
}
