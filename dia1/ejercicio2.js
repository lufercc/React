
// ejecicio 1
const users = [
    {id: 11, nombre: 'Adan', edad: 23, group:'editor'},
    {id: 47, nombre: 'Jhon', edad: 28, group:'admin'},
    {id: 85, nombre: 'William', edad: 34, group:'editor'},
    {id: 97, nombre: 'Oliver', edad: 28, group:'admin'},
];
// elemento con las letras 'hon'
const result = users.filter(val =>{
    val.nombre.includes("hon");
});
console.log(result);

// ejercicio2

const euros = [29.76, 41.85, 46.5 ];

euros.map(val => sum(val));
euros.map(val => promedio(val));


function sum(number){
    // 
}

function promedio() {
    //
}

// obteer la suma y los promedios de os valores