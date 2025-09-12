const products = [
  { id: 1, name: "Laptop", stock: 3 },
  { id: 2, name: "Mouse", stock: 0 },
  { id: 3, name: "Teclado", stock: 5 },
];

// Filtra los productos con stock > 0.

// Devuelve un arreglo de strings:
// "Laptop (3 disponibles)"
// "Producto agotado: Mouse"

// Haz una función renderProducts(arr) que reciba el array y devuelva todos los strings unidos con \n

const enStock = products.filter((producto) => producto.stock > 0);
const info = products.forEach((producto) => {
  if (producto.stock > 0) {
    console.log(`${producto.name} (${producto.stock} disponibles)`);
  } else {
    console.log(`Producto agotado: ${producto.name}`);
  }
});
const renderProducts = () => {
  return products.name;
};
console.log(enStock);
console.log(renderProducts());
