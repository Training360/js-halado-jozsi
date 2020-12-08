(function() {

    // Save a cookie with js.
    // Example: doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT
    const saveCookie = (name, content, expireDate = new Date()) => {
        document.cookie = `${name}=${content}; expires=${expireDate}`;
    };

    const expire = new Date( new Date().getTime() + 15 * 60 * 1000 );
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
        getList() {
            return new Promise( (res, rej) => {
                if (localStorage.users) {
                    res(JSON.parse(localStorage.users));
                } else {
                    fetch('http://localhost:3000/users')
                        .then(response => res(response.json()));
                }
            });
        },
        showList(parent) {
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

    userHandler.showList('.user-list');

    
})();