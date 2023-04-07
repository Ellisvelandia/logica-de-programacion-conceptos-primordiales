const secretosJuego = document.querySelector(".secretosJuego");
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  Verificar();
});
input.focus();

const sorteoNumeros = (cantidad) => {
  let secreto = [];
  let contador = 1;

  while (contador <= cantidad) {
    let numeroAleatorio = aleatorio();
    console.log(numeroAleatorio);
    let encontrado = false;

    if (numeroAleatorio != 0) {
      for (let posicion = 0; posicion < secreto.length; posicion++) {
        if (numeroAleatorio === secreto[posicion]) {
          encontrado = true;
          break;
        }
      }

      if (encontrado === false) {
        secreto.push(numeroAleatorio);
        contador++;
      }
    }
  }
  return secreto;
};

const aleatorio = () => {
  return Math.round(Math.random() * 10);
};

let secreto = sorteoNumeros(4);
console.log(secreto);

const Verificar = () => {
  let encontrado = false;

  for (let posicion = 0; posicion <= secreto.length; posicion++) {
    if (parseInt(input.value) === secreto[posicion]) {
      alert("usted acerto");
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    alert("Usted erro");
  }
  input.value = "";
  input.focus();
};
