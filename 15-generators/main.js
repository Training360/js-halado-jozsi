const names = ['Pisti', 'Józsi', 'Ági', 'Feri'];
for (let name of names) {
    console.log(name);
}

//Range iterátor készítése
function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

/* const it = makeRangeIterator(10, 30, 2);
console.log('it: ', it);
for (const num of it) {
    console.log(num);

} */

const user = {
    name: 'John Doe',
    email: 'jd@gmail.com',
    age: 45,
    address: 'Budapest'
};

function* getObjectValues(obj) {
    const keys = Object.keys(obj);
    keys.sort();
    for (const key of keys) {
        yield obj[key];
    }
}

const userValues = getObjectValues(user);
for (const v of userValues) {
    console.log(v);
}