const numeroPar = document.querySelector(".numeroPar");

const numerosParesResultado = (valor) => {
  const newdiv = document.createElement("div");
  newdiv.innerHTML = `
   <p>${valor}</p>
  `;
  numeroPar.appendChild(newdiv);
};

for (let num = 0; num < 51; num++) {
  numerosParesResultado(2 * num);
}
