const estrella = document.querySelector(".estrella");

const respuestaEstrella = (valor) => {
  const newEstrella = document.createElement("div");
  newEstrella.classList.add("estrella")
  newEstrella.innerHTML = `
    <p>${valor}</p>
  `;
  estrella.appendChild(newEstrella);
};

for (let lineas = 0; lineas < 3; lineas++) {
  for (let columnas = 0; columnas < 10; columnas++) {
    respuestaEstrella("*");
  }
}
