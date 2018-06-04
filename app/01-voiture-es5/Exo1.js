function Voiture(marque, prix, vmax) {
    this.marque = marque;
    this.prix = prix;
    this.vmax = vmax;
}

Voiture.prototype.start = function() {
    console.log('Vroum Vroum Vroum %s and i cost %d and i can go to %d.', this.marque, this.prix, this.vmax);
}

console.log('Voiture', Voiture);
console.log('Voiture %O', Voiture);

const mercedes = new Voiture('mercedes', 60000, 250);
mercedes.start();
const renault = new Voiture('renault', 30000, 220);
renault.start();

console.log('mecedes.start is equals to renault.start in memory ?', mercedes.start === renault.start);