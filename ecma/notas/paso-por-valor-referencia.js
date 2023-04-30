/**
 * Entre tipos de datos simples el asignar el valor de una variable a otra,
 * consiste en hacer un paso por valor.
 * Cuando se modifique una variable no afecta a la otra porque lo que paso
 * fue el valor y no la REFERENCIA.
 */

let numero = 10;
let numero2 = numero;
numero2 = 30;
console.log(numero, numero2); // 10, 30


let name = 'montoya';
let name2 = name;
name2 = 'dany';
console.log(name, name2); // montoya, dany

/**
 * Entre tipos de datos complejos, el asignar valor de una variable a otra
 * es por referencia, es decir, ocupan el mismo espacio.
 */
 // es5 => object.create, object.assign

let student = { name: 'jose' };
const matters = ['math'];

// let student2 = student;
let student2 = { ...student }; 
student2.name = 'dany';
// let student2 = { ...student, name: 'dany' }; // simplifica la linea 29 y 30
console.log(student, student2); // dany, dany 

// let matters2 = matters;
let matters2 = [ ...matters ];
matters2[0] = 'spanish';
console.log(matters, matters2); // spanish, spanish 