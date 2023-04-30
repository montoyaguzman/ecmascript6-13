// // before

// const arreglo = [10, 40, 30, 50];

// // inicio, condicion, razonCambio
// for (var i=0; i<arreglo.length; i++) {
//   console.log(arreglo[i]);
// }
// console.log('i: ', i);

// problema: tener variables globales que despues modificaramos su valor sin querer
// scope: el ambito de vide de una variable


// ejemplo 1
const arreglo = [10, 40, 30, 50];
// inicio, condicion, razonCambio
for (let i=0; i<arreglo.length; i++) {
  console.log(arreglo[i]);
  // con let se limite el scope de i
}
console.log('i: ', i); // ReferenceError: i is not defined
var mensaje = 'otro mensaje';
console.log(sum(10, 4), mensaje);


// ejemplo 2
var mensaje = 'hola!!';
let algo = 'montoya'; // como no esta entre llaves 'algo' tiene su scope en todo el archivo
function sayHello() { 
   let mensaje = 'hola!!'
   console.log('dentro: ', mensaje);
   return mensaje;
}
 
sayHello();
console.log(mensaje);

mensaje = 'adios'; // yo programador modifique la variable sin querer

sayHello();
console.log(mensaje);

