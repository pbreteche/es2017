export class LoginFormSender {
    constructor(element) {
        this.form = document.querySelector(element);
    }

    attach() {
        return new Promise((resolve, reject) => {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'auth.php');
                xhr.addEventListener('load', (e) => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        switch (xhr.getResponseHeader('Content-type').split(';')[0]) {
                            case 'text/json':
                                resolve(JSON.parse(xhr.responseText));
                                return;
                            case 'text/plain':
                                resolve(xhr.responseText);
                                return;
                            default:
                                reject('format inconnu')
                        }
                    }
                    else {
                        reject('Le serveur n\'a pas répondu correctement');
                    }
                });
                xhr.send(new FormData(e.target))
            });
        });
    }
}
