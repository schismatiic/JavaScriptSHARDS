// Se llama practiceMap, pero también practicaré forEach
// Usa forEach para imprimir en consola cada número multiplicado por 3.
// Usa forEach para sumar todos los números del array y mostrar el total al final.
// const numeros = [5, 10, 15, 20, 25];

// numeros.forEach((num) => {
//   console.log(`${num} multiplicado por 3 es ${num * 3}`);
// });
// let suma = 0;
// numeros.forEach((sumNum) => {
//   suma = suma + sumNum;
//   console.log(`Total: ${suma}`);
// });
const numeros = [2, 4, 6, 8, 10];
const porDos = numeros.map((numero) => {
  return numero * 2;
});
const numString = numeros.map((num) => {
  return `Número: ${num}`;
});
console.log(porDos);
console.log(numString);
