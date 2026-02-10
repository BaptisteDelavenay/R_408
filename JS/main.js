// button, et zone d'affichage
let button = document.getElementById("button");
let afficheNB = document.getElementById("compteur");
let temp = document.getElementsByClassName("shop-item disabled");

// toutes les div des améliorations
let shopLoup = document.getElementsByClassName("shop-loup")[0];
let shopAlpha = document.getElementsByClassName("shop-alpha");
let shopLoupia = document.getElementsByClassName("shop-loupia");
let shopTralelouloup = document.getElementsByClassName("shop-tralelouloup");
let shopLoup67 = document.getElementsByClassName("shop-loup67");

// Boutons pour acheter les améliorations
let buttonloup = document.getElementById("loup");
let buttonalpha = document.getElementById("alpha");
let buttonloupia = document.getElementById("loupia");
let buttontralelouloup = document.getElementById("tralelouloup");
let buttonloup67 = document.getElementById("loup67");

class Clicker {
  constructor() {
    this.compteur = 0;
    this.puissance = 1;
  }

  getCompteur() {
    return this.compteur;
  }

  setPuissance(val) {
    return (this.puissance = val);
  }

  incrementer() {
    this.compteur += this.puissance;
    return this.compteur;
  }

  payer(val) {
    if (this.compteur < val) {
      alert("Pas assez de viande ! Il vous en faut " + val + " pour recruter");
      return false;
    } else {
      this.compteur -= val;
      return true;
    }
  }
}

let clicker = new Clicker();

buttonloup.addEventListener("click", function () {
  if (clicker.payer(10)) {
    clicker.setPuissance(2);
    afficheNB.innerHTML = clicker.getCompteur();
    shopLoup.classList.add("purchased");
    buttonloup.disabled = true;
  }
});
buttonalpha.addEventListener("click", function () {
  if (clicker.payer(200)) {
    clicker.setPuissance(4);
    afficheNB.innerHTML = clicker.getCompteur();
  }
});
buttonloupia.addEventListener("click", function () {
  if (clicker.payer(500)) {
    clicker.setPuissance(8);
    afficheNB.innerHTML = clicker.getCompteur();
  }
});
buttontralelouloup.addEventListener("click", function () {
  if (clicker.payer(1000)) {
    clicker.setPuissance(40);
    afficheNB.innerHTML = clicker.getCompteur();
  }
});
buttonloup67.addEventListener("click", function () {
  if (clicker.payer(6767)) {
    clicker.setPuissance(67);
    afficheNB.innerHTML = clicker.getCompteur();
  }
});

button.addEventListener("click", function () {
  clicker.incrementer();
  afficheNB.innerHTML = clicker.getCompteur();
});
