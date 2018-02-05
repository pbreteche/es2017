import { DONE } from './ToDoo.js';

export class ByStateIterable {
    constructor(toDooLeast, state = DONE) {
        this.toDooLeast = toDooLeast;
        this.state = state;
    }

    *[Symbol.iterator]() {
        for (const id in this.toDooLeast.todos) {
            if (this.toDooLeast.todos[id].state !== this.state ) {
                yield this.toDooLeast.todos[id];
            }
        }
    }
}
