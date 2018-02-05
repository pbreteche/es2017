'use strict';

const myArray1 = Array.of(...['a', 'b', 'c']);
console.log(myArray1);

class MessageList {
    constructor() { this.list = []; }
    add(message) { this.list.push(message); return this; }
    *[Symbol.iterator] () {
        for (const msg of this.list) { yield msg; }
    }
}

const chat = (new MessageList()).add('salu').add('sava?').add('bi1 etoi ?');

const myArray2 = Array.from(chat);
console.log(chat);
console.log(myArray2);
console.log(Array.from(myArray2.keys()));
console.log(Array.from(myArray2.entries()));

console.log([
    { name: 'a', email: 'a'},
    { name: 'b', email: 'b'},
    { name: 'c', email: 'g'},
    { name: 'f', email: 's'},
    { name: 'r', email: 'q'}
].find(e => e.email === 'g'));
