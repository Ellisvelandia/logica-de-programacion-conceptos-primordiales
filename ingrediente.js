const TareaIngredientes = document.querySelector(".TareaIngredientes");

let ingredientes = [];
let cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
let contador = 1;

for (let contador = 0; contador <= cantidad; contador++) {
  let ingrediente = prompt("Informe el ingrediente " + contador);

  while (ingredientes.includes(ingrediente)) {
    alert("El ingrediente ya fue ingresado, por favor ingrese otro.");
    ingrediente = prompt("Informe el ingrediente " + contador);
  }
  ingredientes.push(ingrediente);
}

const arrayImpreso = (valor) => {
  const divIngredientes = document.createElement("div");
  divIngredientes.innerHTML = `
   <p>${valor}</p>
  `;
  TareaIngredientes.appendChild(divIngredientes);
};

arrayImpreso(ingredientes);
