const student = { 
    name: 'jose',
    app: 'montoya',
    apm: 'guzman' 
};

// property, atributo, key (sinonimos)
// objetos.key

console.log(student.name); // jose
console.log(student['name']); // jose

for (const property in student) {
    console.log('nombre de la propiedad: ', property);
    console.log(`${student[property]}`);
}

// concatenar
console.log('hola ' + name);
console.log('hola ', name);
console.log(`hola ${name}`);

// extra
// extensiones recomendadas
// eslint, prettier