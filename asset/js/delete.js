//Importation des variables
import { renderTasks } from "./display.js";
import { tasks, taskList } from "./variables.js";

// fonction pour supprimer une tâche
export function deleteTask(index) {
  tasks.splice(index, 1);

  renderTasks();
}

// fonction pour marquer ou démarquer une tâche comme terminée
export function toggleTaskCompleted(index) {
  tasks[index].completed = !tasks[index].completed;

  renderTasks();
}

// fonction pour supprimer les tâches
export function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed); //probleme

  renderTasks();
}

//Suppression des taches completed
export function removeCompletedTasks() {
  const completedTasks = taskList.querySelectorAll(
    'li input[type="checkbox"]:checked'
  );

  completedTasks.forEach((completedTask) => {
    let taskToRemove = completedTask.parentNode;
    taskList.removeChild(taskToRemove);
  });
}