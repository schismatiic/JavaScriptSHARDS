// Esto es lo mismo que lo anterior. Es para consolidar lo que sé

// Crear un programa en JavaScript que gestione un inventario de productos.
// Cada producto debe ser un objeto con estas propiedades:
// nombre (string)
// precio (número)
// cantidad (número)

// Array principal
// Todos los productos se almacenan en un array llamado inventario.

// Funciones que debes crear
// agregarProducto(nombre, precio, cantidad) → agrega un nuevo producto al inventario.
// venderProducto(nombre, cantidad) → reduce la cantidad de un producto; si la cantidad disponible es menor que la solicitada, mostrar mensaje de error.
// mostrarInventario() → muestra todos los productos con su nombre, precio y cantidad.
// (Opcional) valorTotalInventario() → muestra el valor total del inventario (precio * cantidad para cada producto, sumados).

const inventario = [];
const mostrarInventario = () => {
  inventario.forEach((producto, i) => {
    if (i === 0) {
      console.log("Inventario:");
    }
    console.log(
      `${i + 1}. ${producto.nombre} - Precio: $${producto.precio} - Cantidad: ${
        producto.cantidad
      }`
    );
  });
};
const agregarProducto = (nombre, precio, cantidad) => {
  inventario.push({ nombre: nombre, precio: precio, cantidad: cantidad });
  console.log(
    `Producto agregado: ${nombre}, precio: $${precio}, cantidad: ${cantidad}`
  );
};
const venderProducto = (nombre, cantidad) => {
  const productoReducir = inventario.find(
    (producto) => producto.nombre === nombre
  );
  if (cantidad <= productoReducir.cantidad) {
    console.log(`Se han vendido ${cantidad} de ${productoReducir.nombre}`);
    productoReducir.cantidad = productoReducir.cantidad - cantidad;
  } else {
    console.log("ERROR: la cantidad disponible es menor que la solicitada");
  }
};

agregarProducto("Manzana", 500, 100);
agregarProducto("Pera", 200, 50);
venderProducto("Manzana", 10);
mostrarInventario();
const valorTotalInventario = Object.values(inventario).reduce(
  (acc, producto) => {
    return acc + producto.precio * producto.cantidad;
  },
  0
);
console.log(valorTotalInventario);
