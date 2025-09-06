// ============================================== Closure ==============================================
// Bueno, este es un concepto que desconocía. Aquí va mi intento de entenderlo.

// Un closure es una función que recuerda el entorno en que fue creado. Incluso después de que
// la función externa haya terminado de ejecutarse.

// Chat GPT: "Es como si la función llevara consigo una "mochila" con las variables de su entorno original."

// Ejemplo básico

function crearContador() {
  let cuenta = 0;

  function incrementar() {
    cuenta++;
    return cuenta;
  }
  return incrementar;
}

let contador = crearContador(); // Lo recomendable con closure es que siempre que sea declarada como variable se use "()"

console.log(contador()); // Output: 1
console.log(contador()); // Output: 2

// Segundo ejemplo
// function cajaFuerte(pin) {
//     let dinero = 1000; // variable privada

//     return {
//         consultar: function(ingresado) {
//             if (ingresado === pin) {
//                 return `Tu saldo es ${dinero}`;
//             } else {
//                 return "Pin incorrecto";
//             }
//         },
//         depositar: function(ingresado, cantidad) {
//             if (ingresado === pin) {
//                 dinero += cantidad;
//                 return `Depositaste ${cantidad}`;
//             } else {
//                 return "Pin incorrecto";
//             }
//         }
//     };
// }

// let miCaja = cajaFuerte(1234);
// console.log(miCaja.consultar(1234)); // "Tu saldo es 1000"
// console.log(miCaja.depositar(1234, 500)); // "Depositaste 500"
// console.log(miCaja.consultar(1234)); // "Tu saldo es 1500"
// console.log(miCaja.consultar(1111)); // "Pin incorrecto"
