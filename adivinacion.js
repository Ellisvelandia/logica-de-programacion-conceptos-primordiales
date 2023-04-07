const adivinacion = document.querySelector(".adivinacion");

let numeroPensado = Math.round(Math.random() * 10);
let intentos = 3;
let adivinado = false;

const imprimirAdivinacion = (mensaje) => {
  const newAdivinacion = document.createElement("div");
  newAdivinacion.innerHTML = `
   <p>${mensaje}</p>
  `;
  adivinacion.appendChild(newAdivinacion);
};

for (let contador = 1; contador <= intentos; contador++) {
  let numeroLanzado = parseInt(prompt("Ingrese el numero entre 0 al 10"));
  if (numeroPensado === numeroLanzado) {
    alert(
      `Usted acerto el numero en el intento ${contador} y la respuesta correcta era ${numeroPensado}`
    );
    imprimirAdivinacion(`Usted acerto el numero ${numeroPensado}`);
    adivinado = true;
    break;
  } else {
    alert("no acerto el numero");
  }
}

if (!adivinado) {
  imprimirAdivinacion(`El numero correcto era ${numeroPensado}`);
}
