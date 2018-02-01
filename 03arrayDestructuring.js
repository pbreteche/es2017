'use strict';

let a = 1, b = 2;
console.log(a, b);

// échange de valeur
[a, b] = [b, a];
console.log(a, b);

// échange de valeur
a = b, b = a;
console.log(a, b);

let contact = {firstName: 'Pierre', lastName: 'Bretéché'}

let {firstName, lastName, mail=''} = contact;
console.log(firstName, lastName, mail);

let {firstName: prenom, lastName: nomFamille} = contact;
console.log(prenom, nomFamille);