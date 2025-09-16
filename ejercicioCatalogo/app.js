let products = [
  { id: 1, name: "Cuaderno", stock: 3 },
  { id: 2, name: "Lápiz", stock: 0 },
  { id: 3, name: "Mochila", stock: 5 },
];
const $ = (s) => document.querySelector(s);

/* 
1._ Implementa addProduct(list, name, stock) → retorna un nuevo arreglo con el producto agregado.
2._ Implementa toggleStock(list, id) → retorna un nuevo arreglo que cambia stock entre 0 y 1 (agotado/disponible mínimo).
3._ Implementa removeProduct(list, id) → retorna un nuevo arreglo sin ese producto.
4._ Implementa ProductCard({ id, name, stock }) → devuelve un string HTML con el formato:
      <div class="product" data-id="1">
        <h3>Cuaderno</h3>
        <p>Stock: 3</p>
        <button data-action="toggle">Cambiar stock</button>
        <button data-action="remove">Eliminar</button>
      </div>
5._ Implementa renderCatalog(list) → pinta en #catalog con map(ProductCard).join("").
6._ Conecta el formulario para agregar productos (usar trim y Number).
7._ Conecta el checkbox #onlyStock para filtrar los productos con stock > 0.
8._ Usa delegación de eventos en #catalog para manejar clicks en botones toggle y remove.
 */

const addProduct = (list, name, stock) => {
  let newId = list.length + 1;
  return [...list, { id: newId, name, stock }];
};
// let newProducts = addProduct(products, "Borrador", 4);
// console.log(newProducts);
const toggleStock = (list, id) => {
  return list.map((product) =>
    product.id === id
      ? { ...product, stock: product.stock === 0 ? 1 : 0 }
      : product
  );
};
const removeProduct = (list, id) => {
  return list.filter((product) => product.id !== id);
};
const ProductCard = ({ id, name, stock }) => {
  return `<div class="product" data-id="${id}">
            <h3>${name}</h3>
            <p>Stock: ${stock}</p>
            <button data-action="toggle">Cambiar stock</button>
            <button data-action="remove">Eliminar</button>
          </div>`;
};
const renderCatalog = (list) => {
  return list
    .map((product) => {
      return ProductCard({
        id: product.id,
        name: product.name,
        stock: product.stock,
      });
    })
    .join("");
};
// $("#catalog").innerHTML = renderCatalog(newProducts);
// .value obtiene lo que escribió el usuario y .trim( ) elimina los espacios en blanco en ambos extremos del string
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = $("#newName").value.trim();
  const stock = Number($("#newStock").value.trim());
  if (!text || isNaN(stock)) {
    return;
  }
  products = addProduct(products, text, stock);
  $("#newName").value = "";
  $("#newStock").value = "";
  $("#catalog").innerHTML = renderCatalog(products);
});
$("#onlyStock").addEventListener("input", () => {
  const only = $("#onlyStock").checked;
  const view = only ? products.filter((p) => p.stock > 0) : products;
  $("#catalog").innerHTML = renderCatalog(view);
});
$("#catalog").addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;
  const product = button.closest(".product");
  const id = Number(product.dataset.id);
  if (button.dataset.action === "toggle") {
    products = toggleStock(products, id);
  } else if (button.dataset.action === "remove") {
    products = removeProduct(products, id);
  }
  $("#catalog").innerHTML = renderCatalog(products);
});
$("#catalog").innerHTML = renderCatalog(products);
// console.log(renderCatalog(newProducts));

// console.log(ProductCard({ id: 1, name: "Cuaderno", stock: 3 }));

// console.log(toggleStock(newProducts, 3));
