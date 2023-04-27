import { tasks, taskInput } from "./variables.js";
import { renderTasks } from "./display.js";

// fonction pour ajouter une nouvelle tâche
export function addTask(event) {
  event.preventDefault();

  const newTaskTitle = taskInput.value.trim();

  if (newTaskTitle === "") {
    return;
  }

  tasks.push({ title: newTaskTitle, completed: false });
  taskInput.value = "";

  renderTasks();
}
