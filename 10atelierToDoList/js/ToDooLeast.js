export class ToDooLeast {
    constructor() {
        this.nextId = 0;
        this.todos = {};
    }
    add(todo) {
        todo.id = ++this.nextId;
        this.todos[todo.id] = todo;
    }
}
