// Ejercicio sencillo de closure
// Crea una función llamada crearSaludo que:
// Reciba un nombre como parámetro.
// Devuelva otra función interna que, cuando se llame, retorne un saludo usando ese nombre.

// Luego:
// Crea un saludo para "Juan" y guárdalo en una variable.
// Imprime el saludo llamando a esa función.
// Haz lo mismo para "Ana".

const crearSaludo = (nombre) => {
  const saludar = () => {
    return `Hola, ${nombre}`;
  };
  return saludar;
};

let saludarJuan = crearSaludo("Juan");
console.log(saludarJuan());

let saludarAna = crearSaludo("Ana");
console.log(saludarAna());
