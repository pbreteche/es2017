class ToDoo {
    static get DONE() {
        return 'done';
    }
    static get NOT_DONE() {
        return 'not-done';
    }

    constructor(message, state = ToDoo.NOT_DONE) {
        this.message = message;
        this.state = state;
        this.id = null;
    }    
}
