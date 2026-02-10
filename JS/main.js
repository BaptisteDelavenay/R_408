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
    this.compteur -= val;
    return this.compteur;
  }
}

let clicker = new Clicker();
let button = document.getElementById("button");
let afficheNB = document.getElementById("compteur");
let temp = document.getElementsByClassName("shop-item disabled");

let loup = document.getElementById("loup");
let loupcompteur = document.getElementById("loup-count");
let loupnb = 0;
let alpha = document.getElementById("alpha");
let loupia = document.getElementById("loupia");
let tralelouloup = document.getElementById("tralelouloup");
let loup67 = document.getElementById("loup67");

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

let nbclick = 1;

loup.addEventListener("click", function(){
  nbclick +=1;
  loupnb +=1
  loupcompteur.innerHTML = loupnb;
})

button.addEventListener("click", function () {
  clicker.incrementer(1);
  afficheNB.innerHTML = clicker.getCompteur();
  if (afficheNB.innerHTML == 10) {
    temp[0].style.opacity = "1";
  } else if (afficheNB.innerHTML == 200) {
    temp[1].style.opacity = "1";
  } else if (afficheNB.innerHTML == 500) {
    temp[2].style.opacity = "1";
  } else if (afficheNB.innerHTML == 1000) {
    temp[3].style.opacity = "1";
  } else if (afficheNB.innerHTML == 6767) {
    temp[4].style.opacity = "1";
  }
});

// PARTIE 1 : La fonction qui fabrique le steak
function spawnMeatParticle(x, y) {
    const meat = document.createElement('div');
    meat.classList.add('meat-particle'); // Utilise le style CSS
    meat.textContent = '🥩'; 
    
    // Ajoute un petit décalage aléatoire pour que ça fasse naturel
    const randomX = (Math.random() - 0.5) * 50;
    const randomY = (Math.random() - 0.5) * 50;

    // Place le steak là où on a cliqué (x et y)
    meat.style.left = `${x + randomX}px`;
    meat.style.top = `${y + randomY}px`;

    document.body.appendChild(meat);

    // Supprime le steak après 0.8 seconde pour ne pas faire laguer le jeu
    setTimeout(() => {
        meat.remove();
    }, 800);
}


// PARTIE 2 : L'écouteur qui déclenche la fonction au clic
const boutton = document.getElementById('button');

button.addEventListener('click', function(event) {
    // --- Ton code de score habituel ---
    // score++;
    // updateDisplay();
    // ----------------------------------

    // LA LIGNE MAGIQUE : On appelle la fonction avec les coordonnées de la souris
    spawnMeatParticle(event.clientX, event.clientY);
});
