'use strict';

// scope
// declaration hoisting
// closure
var maVariable = 3;
var toto = 'toto';

var maFonction = function() {
	console.log(maVariable);
	maVariable = 4;
	console.log(maVariable);
	var maVariable;
	const monTableau = [1, 2, 3];
	monTableau.push(4);
	
	for (let i = 0; i < monTableau.length; i++) {
		console.log(monTableau[i], toto);
	}
		
	for (const elt of monTableau) {
		console.log(elt);
	}

	console.log(i);
}

maFonction();



