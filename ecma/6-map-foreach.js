let fruits = ['mangoo', 'tangerine', 'apple'];

// before
for (let i=0; i<fruits.length; i++) {
    console.log('elemento con for', fruits[i]);
}

// arreglo.map(arrowFunction), map retorna
const newMapFruits = fruits.map((element) => {
    console.log('elemento con map', element);
    return element;
});

// arreglo.forEach(arrowFunction), no retorna
const newForEachFruits = fruits.forEach((element) => {
    console.log('elemento con forEach', element);
});

console.log(fruits);
console.log(newMapFruits);
console.log(newForEachFruits);