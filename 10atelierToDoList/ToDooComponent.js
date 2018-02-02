class ToDooComponent {
    constructor(selector, appState) {
        this.element = document.querySelector(selector);
        this.state = appState;
    }

    init() {
        this.element.innerHTML = `
            <input />
            <ul>${this.htmlList}</ul>
        `;
        this.listElement = this.element.querySelector('ul');
        this.bindEvents ();
    }

    bindEvents () {
        const addTodoInput = this.element.querySelector('input');
        const that = this;

        addTodoInput.addEventListener('keyup', function(event){
            if(event.key === 'Enter') {
                that.state.add(this.value);
                that.draw();
                this.value = '';
            }
        })
    }

    draw() {
        this.listElement.innerHTML = this.htmlList;
    }

    get htmlList() {
        let htmlOutput = '';
        for (const todo of this.state.todos) {
            htmlOutput += `<li>${todo}</li>`
        }
        return htmlOutput;
    }
}
