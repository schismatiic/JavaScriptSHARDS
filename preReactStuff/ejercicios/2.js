const tasks = [
  { id: 1, text: "Leer", done: false },
  { id: 2, text: "Ejercitar", done: true },
];

const task = tasks.map((task) => {
  if (task.id === 1) {
    return { ...task, done: true };
  } else {
    return task;
  }
});
task.push({ id: 3, text: "Dormir", done: false });
const newTask = task.filter((tsk) => {
  return tsk.id !== 2;
});
const arregloStrings = newTask.map((tarea) => {
  if (tarea.done === true) {
    return `✅ ${tarea.text}`;
  } else {
    return `⬜ ${tarea.text}`;
  }
});
console.log(arregloStrings);

console.log(newTask);
