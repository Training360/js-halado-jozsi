// Define variables.
var name = 'Satya';
const name2 = 'Piri';
let name3 = 'Béci';

// Redefine variables.
name = 'Józsi';
// name2 = 'Peti'; // Error
name3 = 'Pali';

// Variable types.
// Primitives:
// string
const userName = 'John Doe';
// number
const userAge = 33;
// boolean
const userIsAdmin = true;
// null
const IDontKnow = null;
// undefined
let itIsUndefined;
// bigint
const bigNumber = 333n;
const bigNumber2 = BigInt(9824375982347598234728479237498327498723984798);
// console.log(bigNumber2);
// symbol
const sym1 = Symbol();
// const user = {};
// user[sym1] = 'Joe';
// user.age = 50;
// console.log(user);
// for(const k in user) {
//     console.log(k);
// }

// Collections:
// array
const array1 = [1, 2, 3];
console.log(array1[2]);
array1[0] = 5;
array1.push(4);
array1.unshift(0);
array1.pop();
array1.shift();

// object
console.log( typeof array1 );
const age = 44;
// console.log(age.__proto__.__proto__.__proto__);
const user = {
    name: 'Kiss Márk',
    age: 44,
    address: 'Bp. XXI. Kiss tér 22.',
    email: 'nagy.mark@gmail.com',
    salary: 4000,
};
console.log(user.address);
user.salary = 5000;
user.department = 'accounting';
console.log(user.department.length);
user.hello = function() {
    return `Hello, a nevem ${this.name}`;
};
console.log(user.hello());

user.address = user.address.replace('Bp. XXI.', 'Kecskemét');
console.log(user);