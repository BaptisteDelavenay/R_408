class Clicker {
  constructor() {
    this.compteur = 0;
  }

  getCompteur() {
    return this.compteur;
  }

  incrementer(val) {
    this.compteur += val;
    return this.compteur;
  }

  incrementer(val) {
    this.compteur += val;
    return this.compteur;
  }

  payer(val) {
    this.compteur -= val;
    return this.compteur;
  }
}

let clicker = new Clicker();
let button = document.getElementById("button");
let afficheNB = document.getElementById("compteur");

let loup = document.getElementById("loup");
let loupcompteur = document.getElementById("loup-count");
let alpha = document.getElementById("alpha");
let loupia = document.getElementById("loupia");
let tralelouloup = document.getElementById("tralelouloup");
let loup67 = document.getElementById("loup67");

button.addEventListener("click", function () {
  clicker.incrementer(1);
  afficheNB.innerHTML = clicker.getCompteur();
});

loup.addEventListener("click", function () {
  Clicker.payer(10);
});
alpha.addEventListener("click", function () {
  Clicker.payer(200);
});
loupia.addEventListener("click", function () {
  Clicker.payer(500);
});
tralelouloup.addEventListener("click", function () {
  Clicker.payer(1000);
});
loup67.addEventListener("click", function () {
  Clicker.payer(6767);
});

button.addEventListener("click", function () {
  clicker.incrementer(1);
  afficheNB.innerHTML = clicker.getCompteur();
});
button.addEventListener("click", function () {
  clicker.incrementer(1);
  afficheNB.innerHTML = clicker.getCompteur();
});

// --- EFFET VISUEL : PLUIE DE VIANDE ---
// C'est cette fonction qui fait apparaître le steak
function spawnMeatParticle(x, y) {
  // 1. Créer l'élément
  const meat = document.createElement("div");
  meat.classList.add("meat-particle"); // Classe définie dans le CSS
  meat.textContent = "🥩";

  // 2. Position aléatoire autour du clic pour un effet naturel
  const randomX = (Math.random() - 0.5) * 50; // Décalage horizontal
  const randomY = (Math.random() - 0.5) * 50; // Décalage vertical

  meat.style.left = `${x + randomX}px`;
  meat.style.top = `${y + randomY}px`;

  // 3. Ajouter au corps de la page
  document.body.appendChild(meat);

  // 4. Supprimer après l'animation (0.8 seconde)
  setTimeout(() => {
    meat.remove();
  }, 800);
}
