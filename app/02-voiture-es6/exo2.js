class Voiture {
    
    constructor(marque, prix, vmax) {
        this.marque = marque;
        this.prix = prix;
        this.vmax = vmax;
    }

    start() {
        console.log('Vroum Vroum Vroum %s and i cost %d and i can go to %d.', this.marque, this.prix, this.vmax);
    }
}

console.log('Voiture', Voiture);
console.log('Voiture %O', Voiture);

const mercedes = new Voiture('Mercedes', 60000, 250);
mercedes.start();
const renault = new Voiture('Renault', 30000, 220);
renault.start();

console.log('mercedes.start is equals to renault.start in memory ?', mercedes.start === renault.start);
