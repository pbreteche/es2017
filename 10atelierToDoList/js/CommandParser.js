import { ToDoo } from './ToDoo.js';

export class CommandParser {
    constructor(commandPrompt, toDooComponent) {
        this.stdout = commandPrompt.children[0];
        this.stdin = commandPrompt.children[1];
        this.toDooComponent = toDooComponent;
        this.init();
    }

    init() {
        const that = this;
        const thatComponent = this.toDooComponent;
        this.stdin.addEventListener('keyup', function(event){
            if(event.key === 'Enter') {
                that.stdout.innerHTML += `<p>&gt; ${this.value}</p>`;
                console.log(this.value);
                let commandLine = this.value.split(' ');
                let command = commandLine[0];
                let toDooMessage = commandLine.slice(1).join(' ');
                switch (command) {
                    case 'put':
                        thatComponent.state.add(new ToDoo(toDooMessage));
                        thatComponent.draw();
                        that.stdout.innerHTML += `<p class="success">ToDoo added :)</p>`;
                        this.value = '';
                        break;
                    case 'check':
                        try {
                            thatComponent.state.check(toDooMessage);
                        }
                        catch (e) {
                            that.stdout.innerHTML += `<p class="error">${e}</p>`;
                            break
                        }
                        thatComponent.draw();
                        that.stdout.innerHTML += `<p class="success">Well done guy</p>`;
                        this.value = '';
                        break;
                    case 'ls':
                        for (const todo of thatComponent.state) {
                            that.stdout.innerHTML += `<p class="info">[${todo.id}] ${todo.message}</p>`;

                        }
                        this.value = '';
                        break;
                    case 'help':
                        that.stdout.innerHTML += `<p class="info">put: ajouter un nouveau ToDoo<br />
                        ls: lister les ToDoos<br />
                        help: afficher l'aide</p>`;
                        this.value = '';
                        break;
                    default:
                        that.stdout.innerHTML += `<p class="error">"${command}" does not exist</p>`;
                }
                that.stdout.scrollTop = that.stdout.scrollTopMax;
            }
        })
    }

}
