const student = { 
  name: 'jose',
  app: 'montoya',
  apm: 'guzman' 
};

for (const property in student) {
  console.log('nombre de la propiedad: ', property);
  console.log(`${student.[property]}`);
}