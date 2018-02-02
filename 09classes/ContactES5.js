'use strict';

const Contact = function (name) {
    this.name = name;
    this.email = [];
}

Contact.prototype.getFullInfos = function() {
    return this.name + ': ' + this.email.join(', ');
}

const Customer = function(name) {
    Contact.call(this, name);
    this.bankAccount = bankAccount;
}

Customer.prototype = Object.create(Contact.prototype);
Customer.prototype.takeMoney = function (amount) {
    this.bankAccount -= amount;
}

Customer.createAnonymous = function() {
    return new Customer('anonyous');
}
