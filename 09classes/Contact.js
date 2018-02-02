'use strict';

const People = class Contact {
    constructor(name) {
        this.name = name;
        this.email = [];
    }

    getFullInfos() {
        return this.name + ': ' + this.email.join(', ');
    }
}

class Customer extends People {
    constructor(name, bankAccount = Math.random() * 1000) {
        super(name);
        this.bankAccount = bankAccount;
    }

    takeMoney(amount) {
        this.bankAccount -= amount;
    }

    set zipCode(zipCode) {
        this._zipCode = '75015';
    }

    get zipCode() {
        return '44000';
    }

    static createAnonymous() {
        return new Customer('anonyous')
    }
}

const gérard = new People('Gérard');
gérard.email.push('gerard@wanadoo.fr');
console.log(gérard.getFullInfos());

const kevin = Customer.createAnonymous();
kevin.zipCode = '44000';

console.log(kevin.zipCode);
console.log(kevin);

const germaine = new Customer('Gertrude');
germaine.takeMoney(200);


console.log(gérard, germaine, People.name);
