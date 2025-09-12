let products = [
  { id: 1, name: "Cuaderno", stock: 3 },
  { id: 2, name: "Lápiz", stock: 0 },
  { id: 3, name: "Mochila", stock: 5 },
];

/* 
1._ Implementa addProduct(list, name, stock) → retorna un nuevo arreglo con el producto agregado.
2._ Implementa toggleStock(list, id) → retorna un nuevo arreglo que cambia stock entre 0 y 1 (agotado/disponible mínimo).
3._ Implementa removeProduct(list, id) → retorna un nuevo arreglo sin ese producto.
 */

const addProduct = (list, name, stock) => {
  let newId = list.length + 1;
  return [...list, { id: newId, name, stock }];
};
let newProducts = addProduct(products, "Borrador", 4);
console.log(newProducts);

// const toggleStock = (list, id) => {
//   return list.map((product) =>
//     product.id === id ? { ...product, stock: 0 } : list
//   );
// };
const removeProduct = (list, id) => {
  return list.filter((product) => product.id !== id);
};
