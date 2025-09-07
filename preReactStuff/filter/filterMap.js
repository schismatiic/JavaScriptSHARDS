// Tienes este arreglo de estudiantes con sus notas:
const estudiantes = [
  { nombre: "Ana", nota: 85 },
  { nombre: "Luis", nota: 55 },
  { nombre: "Carla", nota: 92 },
  { nombre: "Pedro", nota: 40 },
  { nombre: "Marta", nota: 75 },
];
// Lo que tienes que hacer es:
// 1._ Usar filter para quedarte solo con los estudiantes aprobados (nota mayor o igual a 60).
// 2._ Luego, con map, crear un nuevo arreglo que contenga únicamente sus nombres en mayúsculas.
const aprobados = estudiantes
  .filter((estudiante) => estudiante.nota >= 60)
  .map((estudiante) => estudiante.nombre.toUpperCase());

console.log(aprobados);
