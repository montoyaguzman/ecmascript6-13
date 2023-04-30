const arreglo = [10, 40, 30, 50];

for (var i=0; i<arreglo.length; i++) {
  debugger;
  console.log(arreglo[i]);
  console.log(i);
  // con let se limite el scope de i
}
console.log('i: ', i); // ReferenceError: i is not defined
