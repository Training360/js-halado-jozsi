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
    // Delay time in seconds.
    delay: 5,
    repeatCount: 10,
    url: 'http://localhost:3000/users',
    repeatNum: 0,
    // 1. Adatok lekérése.
    // 2. Ha nem sikerül, bizonyos időközönként megismételni, bizonyos számban.
    // 3. Kiírom, hogy az alkalmazás offline módban van.
    // 4. Ha az összes kérés sikeretelen volt, akkor betöltöm a localStorage -ból.
    // 5. Ha ez sem sikerült, akkor üres tömböt adok vissza.
    async getList() {
        while (this.repeatNum < this.repeatCount) {
            try {
                const response = await fetch(this.url);
                const data = await response.json();
                this.repeatNum = 0;
                return data;
            } catch(e) {
                this.repeatNum++;
                await new Promise( res => setTimeout(res, this.delay * 1000) );
                return this.getList();
            }
        }

        this.repeatNum = 0;
        alert('Az alkalmazás offline.');
        if (localStorage.users) {
            return JSON.parse(localStorage.users);
        } else {
            alert('A helyi tároló is üres.');
            return [];
        }
    },
    showList(parent, delay, repeatCount) {
        this.delay = delay;
        this.repeatCount = repeatCount;
        parent = document.querySelector(parent);
        this.getList().then(
            list => {
                this.generateList(parent, list);
                localStorage.users = JSON.stringify(list);
            },
            err => console.error(err)
        );
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