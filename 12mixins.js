class Contact {
    sayHello() {
        console.log('coucou');
    }
}

class Customer extends Contact {
}

const namableMixin = function(BaseClass) { return class extends BaseClass {
    set name (name) { this._name = name; }
    get name () { return this._name; }
}};

class Coworker extends namableMixin(Contact) {}

const myCustomer = new Customer();
myCustomer.sayHello();
console.log(myCustomer);

const myCoworker = new Coworker();
myCoworker.name = 'Thierry';
myCoworker.sayHello();
console.log(myCoworker);
