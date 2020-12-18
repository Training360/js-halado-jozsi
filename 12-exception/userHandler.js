const saveCookie = (name, content, expireDate = new Date()) => {
    document.cookie = `${name}=${content}; expires=${expireDate}`;
};

const expire = new Date(new Date().getTime() + 15 * 60 * 1000);
// saveCookie('token', 'ldskjflkdsjf', expire);

// Cookie handler object.
const cookieHandler = {
    getCookie(name) {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith(name))
            .split('=')[1];
        return cookieValue;
    },
    removeCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    },
    setSessionStorage(key, value) {
        window.sessionStorage.setItem(key, value);
    },
    moveToSession(name) {
        const value = this.getCookie(name);
        this.removeCookie(name);
        this.setSessionStorage(name, value);
    }
};

// cookieHandler.moveToSession('token');

const userHandler = {
    delay: 5,
    repeatCount: 10,
    repeatNum: 1,
    url: 'http://localhost:3000/users',
    async getList() {
        while (this.repeatNum < this.repeatCount) {
            try {
                const response = await fetch(this.url);
                const data = await response.json();
                return data;
            } catch(e) {
                this.repeatNum++;
                await new Promise( (res) => setTimeout(res, this.delay * 1000));
                return this.getList();
            }
        }

        this.repeatNum = 1;
        alert('Az alkalmazás offline.');
        if (localStorage.users) {
            return JSON.parse(localStorage.users);
        } else {
            alert('A helyi tároló is üres.');
            return [];
        }


        /* return new Promise((res, rej) => {
            res = resolveFunc ? resolveFunc : res;
            fetch(url)
                .then(response => res(response.json()))
                .catch(
                    e => {
                        if (this.repeatNum < this.repeatCount) {
                            const to = setTimeout( () => {
                                clearTimeout(to);
                                this.getList(res);
                                this.repeatNum++;
                            }, this.delay * 1000);
                            return;
                        }

                        this.repeatNum = 1;
                        alert('Az alkalmazás offline.');
                        if (localStorage.users) {
                            res( Promise.resolve(JSON.parse(localStorage.users)) );
                        } else {
                            alert('A helyi tároló is üres.');
                            res(Promise.resolve([]));
                        }
                    }
                );
        }); */
    },
    async showList(parent, delay, repeatCount) {
        parent = document.querySelector(parent);
        this.delay = delay;
        this.repeatCount = repeatCount;
        const list = await this.getList();
        this.generateList(parent, list);
        localStorage.users = JSON.stringify(list);
    },
    generateList(parent, list) {
        list.forEach(element => {
            const p = document.createElement('p');
            p.classList.add('user-row');
            p.textContent = `${element.firstName} ${element.lastName}`;
            parent.appendChild(p);
        });
    }
}

export {
    saveCookie,
    cookieHandler,
    userHandler,
};

// userHandler.showList('.user-list');