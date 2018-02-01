'use strict';

const demo = {
    contacts: [
        {
            mails: [1, 2, 3]
        },
        {
            mails: [1, 2, 3, 4]
        },
        {
            mails: [1, 2]
        },
        {
            mails: [1, 2, 3]
        }
    ]
}

demo[Symbol.iterator] = function* () {
    for (const contact of this.contacts) {
        for (const mail of contact.mails) {
            yield mail;
        }
    }
}

for(const mail of demo) {
    console.log(mail);
}