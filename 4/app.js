let products = [
  { id: 1, name: "Cuaderno", stock: 3 },
  { id: 2, name: "Lápiz", stock: 0 },
  { id: 3, name: "Mochila", stock: 5 },
];

// Implementa addProduct(list, name, stock) → retorna un nuevo arreglo con el producto agregado.
// Implementa toggleStock(list, id) → retorna un nuevo arreglo que cambia stock entre 0 y 1 (agotado/disponible mínimo).
const addProduct = (list, name, stock) => {
  let newId = list.length + 1;
  return [...list, { id: newId, name: name, stock: stock }];
};
const toggleStock = (list, id) => {
  const productToggle = list.find((product) => product.id === id);
  return list.map((producto) => {
    return { ...producto, stock: 0 };
  });
};
console.log(toggleStock(products, 1));
