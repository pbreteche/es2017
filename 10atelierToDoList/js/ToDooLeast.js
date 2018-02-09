import {DONE} from "./ToDoo.js";

export class ToDooLeast {
    constructor() {
        this.nextId = 0;
        this.todos = {};
    }

    check(id){
        if(!this.todos.hasOwnProperty(id)) {
            throw `Todoo ${id} doesn't exist`;
        }
        this.todos[id].state = DONE;
    }

    add(todo) {
        todo.id = ++this.nextId;
        this.todos[todo.id] = todo;
        this.save();
    }

    load() {
        const savedData = JSON.parse(window.localStorage.getItem('todoos'));
        if (!savedData) {
            return;
        }
        this.todos = savedData.todos;
        this.nextId = savedData.nextId;
    }

    save() {
        window.localStorage.setItem(
            'todoos',
            JSON.stringify(this)
        );
    }

    *[Symbol.iterator]() {
        for (const id in this.todos) {
            yield this.todos[id];
        }
    }
}
