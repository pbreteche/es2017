'use strict';

document.addEventListener('DOMContentLoaded', function(){
    const component = new ToDooComponent('.todo-app', new ToDooLeast());
    component.init();
});
