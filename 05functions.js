'use strict';

/*
 définition par expression

 function() { bla bla bla }
 */

/*
 définition par déclaration

 function nomDeLaFonction() { bla bla bla }
 */
/*
// Appel en tant que fonction
nomDeLaFonction();

// appel en tant que méthode
monObjet.maFonction();

// appel en tant que constructeur
const maVariable= new maFonction();

// appel via call ou apply
maFonction.call(contexte);
*/

var maFonction2 = function(param1, param2) {
    console.log(param1, param2, arguments);
}
maFonction2(1, 2, 3);
maFonction2('a');
maFonction2('a', null);

var maFonction3 = function(param1, param2 = 1) {
    console.log(param1, param2, arguments);
}

maFonction3('a');
maFonction3('a', null);


var maFonction3 = function(param1, param2, ...otherParams) {
    console.log(param1, param2, otherParams, arguments);
}

maFonction3(1, 2, 3, 4, 5, 6);

const numberArray1 = [1, 2, 3, 4, 5, 6];
const numberArray2 = ['a', 'b', 'c', 'd', 'e', 'f'];

maFonction3(...[...numberArray1, ...numberArray2]);

let maFonction4 = function(a, b=(function(c) { console.log(a); return a * c * 2})(3)) {
    console.log(a, b);
}

maFonction4(2)
