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
