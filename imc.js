const programa = document.querySelector(".programa");

function saltarLinea() {
  programa.innerHTML += "<hr>";
  programa.innerHTML += "<br>".repeat(5);
}

function imprimirLinea(frase) {
  programa.innerHTML += "<big><br>";
  programa.innerHTML += frase;
  programa.innerHTML += "</big>";
  saltarLinea();
}

function calcularImc(peso, altura, nombre, peso2, altura2, nombre2) {
  imc = peso / (altura * altura);
  imc2 = peso2 / (altura2 * altura2);
  imprimirLinea(
    "El IMC calculado de " +
      nombre +
      " y " +
      nombre2 +
      " es " +
      Math.round(imc + imc2) / 2
  );
}

function calcImc(peso, altura) {
  return peso / (altura * altura);
}

nombre = prompt("Informe su nombre");
pesoInformado = prompt(nombre + "Informe su peso");
alturaInformado = prompt(nombre + "Informe su altura");
imcCalculado = calcImc(pesoInformado, alturaInformado);


if (imcCalculado < 18.5) {
  imprimirLinea(
    nombre + " el IMC esta debajo de lo recomendado " + imcCalculado
  );
} else if (imcCalculado < 25) {
  imprimirLinea(nombre + "IMC considerado como normal" + imcCalculado);
} else if (imcCalculado <  29) {
  imprimirLinea(nombre + "IMC considerado como sobrepeso" + imcCalculado);
} else if (imcCalculado >= 30) {
  imprimirLinea(nombre + "IMC considerado como obesidad" + imcCalculado);
} else {
  imprimirLinea(nombre + "IMC no se ha registrado ningun valor" + imcCalculado);
}
