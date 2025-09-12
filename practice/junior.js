// Se supone que si puedo hacer lo siguiente tendré nivel Junior. Lo intentaré D:

// Ejercicio: Gestor de tareas simple

// Crea un programa en JavaScript que:
// - Permita agregar tareas a una lista.
// - Permita marcar una tarea como completada.
// - Permita mostrar todas las tareas con su estado (pendiente o completada).

// Requisitos
// - Usa objetos para representar cada tarea.
// - Usa arrays para almacenar todas las tareas.
// - Usa al menos un método de array (forEach, map o filter).
// - Usa funciones para organizar el código.

// =========================================================================================================================================
// Ejemplo esperado en consola:
// Nueva tarea agregada: "Estudiar JavaScript"
// Nueva tarea agregada: "Hacer ejercicio"

// Lista de tareas:
// 1. Estudiar JavaScript - Pendiente
// 2. Hacer ejercicio - Pendiente

// Tarea completada: "Estudiar JavaScript"

// Lista de tareas:
// 1. Estudiar JavaScript - Completada
// 2. Hacer ejercicio - Pendiente
// =========================================================================================================================================
const tareas = [];
const agregarTarea = (tarea, estado) => {
  console.log(`Nueva tarea agregada: ${tarea} \n`);
  tareas.push({ nombre: tarea, estado: estado });
  return [tarea, estado];
};
const marcarCompletado = (i) => {
  tareas[i].estado = "Completado";
};

agregarTarea("Estudiar JavaScript", "Pendiente");
marcarCompletado(0);
tareas.forEach((tarea, i) => {
  if (i === 0) {
    console.log("Lista de tareas: ");
  }
  console.log(`${i + 1}. ${tarea.nombre} - ${tarea.estado}`);
});
