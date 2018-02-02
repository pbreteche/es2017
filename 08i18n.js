'use strict';

/**
 * I18n
 */

const myDate = new Date();

console.log(myDate.toString());
console.log(myDate.getDate() + ' ' + myDate.getMonth() + ' ' + myDate.getFullYear());

console.log(myDate.toLocaleDateString('fr-FR'));

const l10nFR = new Intl.DateTimeFormat('fr-FR');
console.log(l10nFR.format(new Date()));

const l10nEUR = new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'});
console.log(l10nEUR.format(1234567.89));
