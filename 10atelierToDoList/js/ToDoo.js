export const DONE = 'done';
export const NOT_DONE = 'not-done';

export class ToDoo {
    constructor(message, state = NOT_DONE) {
        this.message = message;
        this.state = state;
        this.id = null;
    }
}
