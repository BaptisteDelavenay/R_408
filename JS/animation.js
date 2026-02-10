// PARTIE 1 : La fonction qui fabrique le steak
function spawnMeatParticle(x, y) {
  const meat = document.createElement("div");
  meat.classList.add("meat-particle"); // Utilise le style CSS
  meat.textContent = "🥩";

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
const boutton = document.getElementById("button");

button.addEventListener("click", function (event) {
  // --- Ton code de score habituel ---
  // score++;
  // updateDisplay();
  // ----------------------------------

  // LA LIGNE MAGIQUE : On appelle la fonction avec les coordonnées de la souris
  spawnMeatParticle(event.clientX, event.clientY);
});
