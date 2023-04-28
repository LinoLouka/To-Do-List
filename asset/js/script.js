//import
import { addTaskButton, removeCompletedButton, tasks } from "./variables.js";
import { renderTasks } from "./display.js";
import { addTask } from "./add.js";
import { clearCompletedTasks, removeCompletedTasks } from "./delete.js";
// Fonctions
renderTasks();
//Explication d'Arnaud
// console.log(tasks);
// for (let task of tasks) {
//   console.log(task);
// }
// Evenements
addTaskButton.addEventListener("click", addTask);
removeCompletedButton.addEventListener("click", clearCompletedTasks);

removeCompletedButton.addEventListener("click", removeCompletedTasks);
