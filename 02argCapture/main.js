'use strict';

document.addEventListener('DOMContentLoaded', function(){
    let color = 'red';
    document.querySelector('#clic').addEventListener('click', (function(colorInsideListener){
        return function(event) {
            this.style.backgroundColor = colorInsideListener;
        }        
    })(color));

    color = 'blue';
});
/************************************/
document.addEventListener('DOMContentLoaded', function(){
    let color = 'red';
    const colorSetterFactory = function fabriqueDeCouleur (colorInsideListener){
        return function() {
            this.style.backgroundColor = colorInsideListener;
        }        
    };

    const mettreEnRouge = colorSetterFactory('red');

    document.querySelector('#clic').addEventListener('click', mettreEnRouge);

    color = 'blue';
});