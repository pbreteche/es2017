'use strict';
/**
 *    Les ensembles
 */
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
mySet.add(4);
mySet.add('toto');
console.log(mySet);
console.log(Array.from(mySet));
console.log(mySet.keys(), mySet.values());
mySet.delete(5);
console.log(mySet.entries());

class ContactBook1 extends Set {

}

class ContactBook2 {
    constructor() {
        this.contactSet = new Set();
    }
}

/**
 *    Les cartes
 */
const myMap = new Map();
myMap.set(1, 4);
myMap.set(2, 'coucou');
myMap.set(new String('hello'), 3);
myMap.set(1, 7);
myMap.set(1, myMap.get('hello'));
myMap.set(new String('hello'), 'toto');
console.log(myMap);

console.log(typeof 'a', typeof new String('a'));

/**
 *    Les cartes faibles
 */
const myWeakMap = new WeakMap();
const myStrongMap = new Map();
const b = new String('b');
{
    const a1 = new String('a');
    const a2 = new String('a');
    myWeakMap.set(a1, b);
    myStrongMap.set(a2, b);
}
console.log(myWeakMap, myStrongMap);
