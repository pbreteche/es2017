'use strict';

const doubler = x => 2 * x;

console.log(doubler(3));

const puissance = (x, p = 2) => Math.pow(x, p)

const contact = { nom: 'Macron', prenom: 'Emmanuel' };

//const creerContact1 = (n, p) => { nom: n, prenom: p }; // marche pas
const creerContact2 = (n, p) => { return { nom: n, prenom: p }; }; // ok
const creerContact3 = (n, p) => ({ nom: n, prenom: p }); // ok
const creerContact4 = (n, p) => new Object({ nom: n, prenom: p }); // ok

const friends = [
    { nom: 'Antoine', age: 25 },
    { nom: 'Bernard', age: 28 },
    { nom: 'Carole', age: 21 },
    { nom: 'Dominique', age: 35 },
    { nom: 'Élise', age: 32 }
];

// Afficher les noms par ordre d'age décroissant
console.log(friends.sort((a, b) => b.age - a.age));

console.log(puissance(3), puissance(2, 4));

// Créer une class Stopwatch qui compte les secondes

class Stopwatch {
    start(callback) {
        this.count = 0;
        this.interval = setInterval(()=> {
            callback(++this.count)
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
    }
}

(new Stopwatch()).start(console.log);
