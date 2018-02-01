'use strict';

const iterator0 = {
    i: 0,
    next: function () {
        return this.i++;
    }
}

console.log(iterator0.next());
console.log(iterator0.next());

/* Iterator */

const ArrayIterator = function(arrayData) {
    this.data = arrayData;
    this.i = 0;
}

ArrayIterator.prototype.next = function() {
    if (this.i < this.data.length) {
        return { value: this.data[this.i++], done: false }
    }
    return { done: true }
}

const fruitIterator = new ArrayIterator(['apple', 'banana', 'cherry', 'date']);

console.log(fruitIterator.next().value);
console.log(fruitIterator.next().value);
console.log(fruitIterator);

const ArrayIteratorBuilder = function(arrayData) {
    let i = 0;

    return {
        next: function() {
            if (i < arrayData.length) {
                return { value: arrayData[i++], done: false }
            }
            return { done: true }
        }
    }
}

const anotherFruitIterator = ArrayIteratorBuilder(['Artichoke', 'Broccoli', 'Carrot', 'Gourds']);

console.log(anotherFruitIterator.next().value);
console.log(anotherFruitIterator.next().value);
console.log(anotherFruitIterator)

/* Generator */

function* fibonacci() {
    let a = 0, b = 1;

    while(true) {
        let sum = a + b;
        a = b;
        b = sum;
        yield sum;
    }
}

const myFibo = fibonacci();

console.log(myFibo.next().value);
console.log(myFibo.next().value);
console.log(myFibo);

/* Iterable */

let myFiboIterable = {};
myFiboIterable[Symbol.iterator] = function* () {
    let a = 0, b = 1;

    while(a < 10000) {
        let sum = a + b;
        a = b;
        b = sum;
        yield sum;
    }
}

for (const nb of myFiboIterable) {
    console.log(nb);
}

/**
 * 1. Créer un type d'objet «Contact» auquel on peut associer des adresses mail
 * 
 * 2. Créer un objet iterable à partir d'un liste de contacts qui permet de parcourir
 *      l'ensemble des mails un à un
 */