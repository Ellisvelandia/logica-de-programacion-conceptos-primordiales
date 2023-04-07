const edadFamilia = document.querySelector(".edadFamilia");

let edadPadre = 42;
let edadMadre = 38;
let edadHijo = 15;
let edadHija = 12;

let totalEdad = edadPadre + edadMadre + edadHijo + edadHija;
let mediaEdad = totalEdad / 5;

const edadDeFamiliaResultado = (mensaje) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
   <p>${mensaje}</p>
  `;
  edadFamilia.appendChild(newDiv);
};

edadDeFamiliaResultado("la edad media de la familia es " + mediaEdad);

let numeroDeMiembros = parseInt(
  prompt("Ingrese la cantidad de miembros de su familia")
);

let contador = 1;
let totalEdades = 0;

while (contador <= numeroDeMiembros) {
  edad = parseInt(prompt("ingrese la edad del familiar"));
  totalEdades = totalEdades + edad;
  contador++;
}

mediaEdades = totalEdades / numeroDeMiembros;

edadDeFamiliaResultado(
  "la media de las edades de la familia es " + mediaEdades
);
