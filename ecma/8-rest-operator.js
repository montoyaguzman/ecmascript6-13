let montoya = {
    name: 'jose montoya',
    age: 19
};
montoya.career = 'sensei';

let dany = {
  ...montoya,
  name: 'dany',
  age: 17
}

console.log('Montoya: ', montoya);
console.log('Dany: ', dany);