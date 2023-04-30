function sayHello() {
    console.log('hola...');
}
// const = function sayHello() {
//     console.log('hola...');
// }
// ReferenceError: sayHello is not defined
 
// problema: ninguno, posiblemente si, porque se pueden guardar funciones en variables

// arrow function
// definicionVariable = () => {
//     // sentences
// }
const sayHelloArrow = () => {
    console.log('hola con arrow...');
}

sayHello();
sayHelloArrow();