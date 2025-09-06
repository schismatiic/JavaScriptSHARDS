// Este será el último ejercicio que haŕe de closure por ahora

// Ejercicio: Contador con métodos incrementar, decrementar y reset
// Crea una función llamada crearContador que:
// No reciba parámetros.
// Declare una variable interna cuenta inicializada en 0.
// Devuelva un objeto con tres funciones internas:

// incrementar() → suma 1 a cuenta y retorna el valor.

// decrementar() → resta 1 a cuenta y retorna el valor.

// reset() → reinicia cuenta a 0 y retorna el valor.

// Luego:
// Crea un contador independiente y guárdalo en una variable.
// Llama varias veces a incrementar y decrementar y observa cómo mantiene el estado privado.
// Llama a reset y confirma que el contador vuelve a 0.

const crearContador = () => {
  let cuenta = 0;

  const incrementar = () => {
    cuenta++;
    return cuenta;
  };
  const decrementar = () => {
    cuenta--;
    return cuenta;
  };
  const reset = () => {
    cuenta = 0;
    return cuenta;
  };
  return {
    incrementar,
    decrementar,
    reset,
  };
};
let contador = crearContador();
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.decrementar());
console.log(contador.reset());
console.log(contador.incrementar());
