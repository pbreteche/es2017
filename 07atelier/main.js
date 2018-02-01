'use strict';

const Contact = function (name) {
    this.name = name;
    this.mails = [];
}

const contactMails = (function()  {
    const contacts = [];
    faker.locale = 'fr';
    for (let i=0; i<10; i++) {
        let contact = new Contact(faker.name.findName());
        for(let j=0; j < Math.random() * 5; j++) {
            contact.mails.push(faker.internet.email());
        }
        contacts.push(contact);
    }
    return { contacts: contacts };
})();

contactMails[Symbol.iterator] = function* () {
    for(const contact of this.contacts) {
        for(const mail of contact.mails) {
            yield mail;
        }
    }
}
console.log (contactMails);

for (const mail of contactMails) {
    console.log(mail);
}