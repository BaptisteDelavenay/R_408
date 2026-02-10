// button, et zone d'affichage
let button = document.getElementById("button");
let afficheNB = document.getElementById("compteur");
let temp = document.getElementsByClassName("shop-item disabled");

// toutes les div des améliorations
let shopLoup = document.getElementsByClassName("shop-loup")[0];
let shopAlpha = document.getElementsByClassName("shop-alpha")[0];
let shopLoupia = document.getElementsByClassName("shop-loupia")[0];
let shopTralelouloup = document.getElementsByClassName("shop-tralelouloup")[0];
let shopLoup67 = document.getElementsByClassName("shop-loup67")[0];

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

function autoClick() {
  clicker.incrementer();
  afficheNB.innerHTML = clicker.getCompteur();
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
    shopAlpha.classList.add("purchased");
    buttonalpha.disabled = true;
    setInterval(autoClick, "1000");
  }
});
buttonloupia.addEventListener("click", function () {
  if (clicker.payer(500)) {
    clicker.setPuissance(8);
    afficheNB.innerHTML = clicker.getCompteur();
    shopLoupia.classList.add("purchased");
    buttonloupia.disabled = true;
    setInterval(autoClick, "100");
  }
});
buttontralelouloup.addEventListener("click", function () {
  if (clicker.payer(1000)) {
    clicker.setPuissance(40);
    afficheNB.innerHTML = clicker.getCompteur();
    shopTralelouloup.classList.add("purchased");
    buttontralelouloup.disabled = true;
    setInterval(autoClick, "10");
  }
});
buttonloup67.addEventListener("click", function () {
  if (clicker.payer(6767)) {
    clicker.setPuissance(67);
    afficheNB.innerHTML = clicker.getCompteur();
    shopLoup67.classList.add("purchased");
    buttonloup67.disabled = true;
    setInterval(autoClick, "1");
  }
});

button.addEventListener("click", function () {
  autoClick();
});
// 4. JOUER LE SON DU LOUP
    // On remet le curseur audio à 0 pour pouvoir spammer le clic
    audioLoup.currentTime = 0;
    // On lance la lecture (si le navigateur l'autorise)
    audioLoup.play().catch(error => {
        // Certains navigateurs bloquent le son tant qu'on n'a pas interagi avec la page
        console.log("Lecture bloquée :", error);
    });
