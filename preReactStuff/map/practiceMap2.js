// Tienes este array de objetos:
const estudiantes = [
  { nombre: "Ana", nota: 80 },
  { nombre: "Luis", nota: 55 },
  { nombre: "Pedro", nota: 70 },
  { nombre: "Sofía", nota: 90 },
];
// 1._ Usa map para obtener un nuevo array con solo los nombres de los estudiantes.
// Resultado esperado: ["Ana", "Luis", "Pedro", "Sofía"]

// 2._ Usa map para obtener un nuevo array de objetos que tenga la estructura:
// { nombre: "Ana", aprobado: true }

// 3._ Usa map para obtener un nuevo array de strings que diga algo como:
// "Ana ha aprobado"
// "Luis ha reprobado"

const nombres = estudiantes.map((_, i) => {
  return estudiantes[i].nombre;
});
const aprobado = estudiantes.map((_, index) => {
  if (estudiantes[index].nota >= 75) {
    return { nombre: estudiantes[index].nombre, aprobado: true };
  } else if (estudiantes[index].nota < 75) {
    return { nombre: estudiantes[index].nombre, aprobado: false };
  }
});
const mensaje = estudiantes.map((_, index) => {
  if (estudiantes[index].nota >= 75) {
    return `${estudiantes[index].nombre} ha aprobado`;
  } else if (estudiantes[index].nota < 75) {
    return `${estudiantes[index].nombre} ha reprobado`;
  }
});
console.log(nombres);
console.log(aprobado);
console.log(mensaje);
