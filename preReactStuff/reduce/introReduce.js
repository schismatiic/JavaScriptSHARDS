// ============================================== Reduce ==============================================
// El método reduce sirve para reducir un array a un solo valor.
// Ese valor puede ser un número, un string, un objeto, otro array o cualquier cosa que necesites.

// A diferencia de map o filter, que devuelven otro array, reduce devuelve un único resultado.

// Sintáxis
// array.reduce((acumulador, elementoActual, indice, array) => {
//    lógica
// }, valorInicial);

// Ejemplo
// const numeros = [1, 2, 3, 4, 5];

// const suma = numeros.reduce((acumulador, actual) => {
//   return acumulador + actual;
// }, 0);

// console.log(suma); // 15

const numeros = [2, 3, 5, 7, 11, 13];
let total = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);
console.log(total);
