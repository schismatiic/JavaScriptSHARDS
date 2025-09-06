// Crea una función llamada crearContador que:
// No reciba parámetros.
// Declare una variable interna cuenta que empiece en 0.
// Devuelva una función interna que:
// Sume 1 a cuenta cada vez que se llame.
// Retorne el valor actual de cuenta.

// Luego:
// Crea un contador independiente y guárdalo en una variable.
// Llama varias veces a esa función y observa cómo aumenta la cuenta.
// Crea un segundo contador independiente y comprueba que cada uno mantiene su propio estado.

const crearContador = () => {
  let cuenta = 0;
  const aumentar = () => {
    cuenta++;
    return cuenta;
  };
  return aumentar;
};
let contador = crearContador();
console.log(contador());
console.log(contador());
console.log(contador());

console.log("\n");

let contador2 = crearContador();
console.log(contador2());
