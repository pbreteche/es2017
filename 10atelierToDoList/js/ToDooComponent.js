import { ToDoo, DONE, NOT_DONE } from './ToDoo.js';
import { ByStateIterable } from './ByStateIterable.js';
import { CommandParser } from './CommandParser.js';

export class ToDooComponent {
    constructor(selector, appState) {
        this.element = document.querySelector(selector);
        this.state = appState;
    }

    init() {
        this.element.innerHTML = `
            <div class="command-prompt">
                <output>Tapez "help", mais pas trop fort s'il vous plait</output>
                <input />
            </div>
            <ul>${this.htmlList}</ul>
        `;
        this.listElement = this.element.querySelector('ul');
        this.bindInput ();
    }

    bindInput() {
        new CommandParser(this.element.querySelector('.command-prompt'), this);
    }

    bindCheckButtons() {
        const checkButtons = this.listElement.querySelectorAll('button');

        for (const btn of checkButtons) {
            btn.addEventListener('click', event => {
                this.state.todos[event.target.dataset.id].state = DONE;
                this.draw();
            })
        }
    }

    draw() {
        this.listElement.innerHTML = this.htmlList;
        this.bindCheckButtons();
    }

    get htmlList() {
        let htmlOutput = '';
        let i = new ByStateIterable(this.state);
        for (const toDoo of i) {
            htmlOutput += this.htmlFragment(toDoo);
        }
        i = new ByStateIterable(this.state, NOT_DONE);
        for (const toDoo of i) {
            htmlOutput += this.htmlFragment(toDoo);
        }
        return htmlOutput;
    }

    htmlFragment(toDoo) {
        return `
        <li class="${toDoo.state}">
            ${toDoo.message}
            <button data-id="${toDoo.id}">✔</button>
        </li>`;
    }
}
