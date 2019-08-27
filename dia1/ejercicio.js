//inventiva2019@gmail.com
// ejercicio 1
let people = ['Steve', 'Pete', 'Mike', 'Nick'];
people = ['Marcos', 'Pedro', ...people];

console.log(people);

//ejercicio2
let user = {name: 'Steve', age: 22};
let details = {place : 'Romania', hobby: 'reading'};
//unir los dos objetos
user.details = details


//ejercicio3
 user = {name: "pedro", lastname: "poveda", details:{phone:455312,dir:"direction123"}}
// obtener la variable phone y dir
console.log('phone: ', user.details.phone);
console.log('direction: ', user.details.dir);

