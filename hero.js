const hero = document.querySelector(".hero");

var heroes = ["Superman", "Thor", "Batman", "Mujer Maravilla"];

const heroRespuesta = (valor) => {
  const nuevosheroes = document.createElement("div");
  nuevosheroes.innerHTML = `
<p>${valor}</p>
`;
  hero.appendChild(nuevosheroes);
};

for (var i = 0; i < heroes.length; i++) {
  heroRespuesta(heroes[i]);
}
