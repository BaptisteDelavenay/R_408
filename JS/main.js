// button, et zone d'affichage
let button = document.getElementById("button");
let afficheNB = document.getElementById("compteur");
let temp = document.getElementsByClassName("shop-item disabled");

// Boutons pour acheter les améliorations
let loup = document.getElementById("loup");
let alpha = document.getElementById("alpha");
let loupia = document.getElementById("loupia");
let tralelouloup = document.getElementById("tralelouloup");
let loup67 = document.getElementById("loup67");

// Nombre de loups acheté, maximum = 1
let loupcompteur = document.getElementById("loup-count");

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

  payer(val) {
    if (this.compteur < val) {
      alert("Pas assez de viande !");
    } else {
      this.compteur -= val;
      return this.compteur;
    }
  }
}

let clicker = new Clicker();

loup.addEventListener("click", function () {
  clicker.payer(10);
  afficheNB.innerHTML = clicker.getCompteur();
});
alpha.addEventListener("click", function () {
  clicker.payer(200);
  afficheNB.innerHTML = clicker.getCompteur();
});
loupia.addEventListener("click", function () {
  clicker.payer(500);
  afficheNB.innerHTML = clicker.getCompteur();
});
tralelouloup.addEventListener("click", function () {
  clicker.payer(1000);
  afficheNB.innerHTML = clicker.getCompteur();
});
loup67.addEventListener("click", function () {
  clicker.payer(6767);
  afficheNB.innerHTML = clicker.getCompteur();
});

button.addEventListener("click", function () {
  clicker.incrementer(1);
  afficheNB.innerHTML = clicker.getCompteur();
});
