'use strict';
import { LoginFormSender } from './LoginFormSender.js';

document.addEventListener('DOMContentLoaded', function() {
    const loginSender = new LoginFormSender('#login-form');
    loginSender.attach()
    .then((data)=> {
        console.log('tout s\'est bien passé');
        console.log(data);
    })
    .catch((error) => {
        console.log('oups', error);
    });
});
