// Tienes un arreglo de productos con su nombre y precio:
const productos = [
  { nombre: "Manzana", precio: 500 },
  { nombre: "Pan", precio: 1200 },
  { nombre: "Leche", precio: 1500 },
  { nombre: "Chocolate", precio: 2500 },
  { nombre: "Queso", precio: 3000 },
];
// Lo que debes hacer es usar filter para quedarte solo con los productos cuyo precio sea menor o igual a 2000.
// Después, muestra el resultado en consola.

const menores = productos.filter((producto) => producto.precio <= 2000);
console.log(menores);
