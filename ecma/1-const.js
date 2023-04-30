// Before

// var PI = 3.1416;

// console.log('pi:', PI);
// PI = 10.90;
// console.log('pi:', PI);

// problema: modificar por error una variable que no deberiamos modificar

const PI = 3.1416;

console.log('pi:', PI);
PI = 10.90; // TypeError: Assignment to constant variable.
console.log('pi:', PI);