let fruits = ['mangoo', 'tangerine', 'apple'];

// before
for (let i=0; i<fruits.length; i++) {
    console.log('elemento con for', fruits[i]);
}

// arreglos
for (let iterador of fruits) { // iterador = fruits[i]
    console.log('elemento con for of', iterador);
}
// iterador: es un comodin para recorrer cada posicion
// iterable: es un objeto que puedo recorrer con un ciclo, por ejemplo un array