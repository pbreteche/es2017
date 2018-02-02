import { ToDoo, DONE } from './ToDoo.js';

export class ToDooComponent {
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
        this.bindInput ();
    }

    bindInput() {
        const addTodoInput = this.element.querySelector('input');
        const that = this;

        addTodoInput.addEventListener('keyup', function(event){
            if(event.key === 'Enter') {
                that.state.add(new ToDoo(this.value));
                that.draw();
                this.value = '';
            }
        })
    }

    bindCheckButtons() {
        const checkButtons = this.listElement.querySelectorAll('button');
        const that = this;

        for (const btn of checkButtons) {
            btn.addEventListener('click', function(event){
                that.state.todos[this.dataset.id].state = DONE;
                that.draw();
            })
        }
    }

    draw() {
        this.listElement.innerHTML = this.htmlList;
        this.bindCheckButtons();
    }

    get htmlList() {
        let htmlOutput = '';
        const t = this.state.todos;
        for (const id in this.state.todos) {
            htmlOutput += `
            <li class="${t[id].state}">
                ${t[id].message}
                <button data-id="${id}">✔</button>
            </li>`
        }
        return htmlOutput;
    }
}
