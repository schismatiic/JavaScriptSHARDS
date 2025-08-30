/*
Obtén un arreglo con los nombres de quienes active === true.
Calcula la edad promedio (número con 1 decimal).
Construye un mapa por edad: { 22: ["Ana"], 19: ["Luis"], 27: ["Sol","Max"] } usando reduce.
*/
const users = [
  { id: 1, name: "Ana",  age: 22, active: true },
  { id: 2, name: "Luis", age: 19, active: false },
  { id: 3, name: "Sol",  age: 27, active: true },
  { id: 4, name: "Max",  age: 27, active: false }
];
let active = [];
let sum = 0;
let cont = 0;
edadPromedio = 0;
for (let index = 0; index < users.length; index++) {
    if (users[index].active == true) {
        console.log(users[index]);
        active.push(users[index]);
    }
    sum = sum + users[index].age;
    cont++;
    edadPromedio = Math.round((sum/cont) * 10) / 10;
}
const mapaEdad = users.reduce((acc,users, i) => {
  if (!acc[users.age]) {
    acc[users.age] = [];
  }
  
}, {});
console.log(active);
console.log(edadPromedio);




