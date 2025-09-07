// Esto es aparte. Es solo un recordatorio del forEach

// const fruits = ["Apple", "Pear", "Orange", "Grapes"];
// fruits.forEach((fruit, i) => {
//   console.log(`Fruit ${i + 1}: ${fruit}`);
// });

// ============================================== Map ==============================================
// map es un método de los arrays en JavaScript.
// Sirve para transformar cada elemento de un array y devolver un nuevo array con esos resultados.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dobles = numeros.map((num) => {
  return num * num;
});
dobles.forEach((num, i) => {
  console.log(`${i + 1} al cuadrado es ${num}`);
});
