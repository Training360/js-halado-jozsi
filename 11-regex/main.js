document.querySelector('.register-form').addEventListener('submit', (ev) => {
    ev.preventDefault();

    // Name: 5 char length, only contains letters and space.
    const name = ev.target.querySelector('input[name=name]').value;
    // caret: ^ altgr+3 space, \w = szó karakterek (a-ű), \s = whitespace (tab, space)
    if (!/^\w+$/.test(name)) {
        alert('The name must be at least 5 chars and contains letters.');
    }
    
    // Check password.
    // At least 8 char long, a-ű A-Ű 0-9
    const passwordRegex = new RegExp('^.{8,}$', 'g');
    const password = ev.target.querySelector('input[name=password]').value;
    if (!passwordRegex.test(password)) {
        alert('The password must be at least 8 chars and contains letters and number.');
    }
});