'use strict';

import { ToDooComponent } from './ToDooComponent.js';
import { ToDooLeast } from './ToDooLeast.js';

document.addEventListener('DOMContentLoaded', function(){
    const component = new ToDooComponent('.todo-app', new ToDooLeast());
    component.init();
});
