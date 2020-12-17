'use strict';

// Globális névtér.
let version = '1.0.0';

console.log(this);

function testThis() {
    // testThis függvény névtere
    console.log(this);
}
testThis();

const arrowTest = () => {
    // arrowTest függvény névtere
    console.log(this);
};
arrowTest();

// This objektumon belül.
const user = {
    name: 'Józsi',
    hello() {
        console.log(this, `Hello, a nevem ${this.name}.`);
    },
    voice: () => console.log(this, `${this.version}`)
}
user.hello();
user.voice();

// This értéke eseményen belül.
const noClickBtn = document.querySelector('.no-click-btn');
noClickBtn.addEventListener('click', function(ev) {
    console.log('No click: ', this, ev);
});
// Az arrow function nem bindolja a thist.
// Arrow function esetén az eseménykezelőben a this = window
noClickBtn.addEventListener('click', (ev) => {
    console.log('No click: ', this, ev, ev.currentTarget);
});

// Call és apply használata.
// Meglévő függvényt hív meg egy megadott this -el.
// A this az első paraméter, utána sorban jön a többi paraméter.
// A call és apply közötti különbség, hogy az apply tömb 
// formátumban várja a paramétereket.
function readName(nice) {
    console.log(this, this.name, nice);
}
// readName();
readName.call({name: 'Sanyi'}, 'good');
readName.apply({name: 'Péter'}, ['best']);

// Bind használata.
// Új függvényt hoz létre az eredeti alapján, egy 
// megadott this -el.
const r2 = readName.bind({name: 'Gabi'});
r2('better');
r2();
r2();
const r3 = readName.bind({name: 'Satya'});
r3();

const arrowName = () => console.log(this.name);
arrowName();
const a2 = arrowName.bind({name: 'Péter'});
a2();
arrowName.call({name: 'Evelin'});
arrowName.apply({name: 'Józsi'});
