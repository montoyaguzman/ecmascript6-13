function sum(num1 = 0, num2 = 0) {
    return num1 + num2;
}

function sayHello(name = 'sin nombre') { 
   console.log('hola...', name);
}

console.log(sum());
sayHello();

console.log('=================');

console.log(sum(30, 24));
sayHello('montoya');