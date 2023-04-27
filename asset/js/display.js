import { tasks, taskList } from "./variables.js";
import { deleteTask, toggleTaskCompleted } from "./delete.js";

// fonction pour afficher la liste des tâches
export function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    const taskCheckbox = document.createElement("input");
    const taskLabel = document.createElement("label");
    const deleteButton = document.createElement("button");

    taskCheckbox.type = "checkbox";
    taskCheckbox.checked = task.completed;
    taskCheckbox.addEventListener("change", () => {
      toggleTaskCompleted(index);
    });

    taskLabel.textContent = task.title;
    taskLabel.htmlFor = `task-${index}`;

    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTask(index);
    });

    taskElement.appendChild(taskCheckbox);
    taskElement.appendChild(taskLabel);
    taskElement.appendChild(deleteButton);

    if (task.completed) {
      taskElement.classList.add("completed");
    }

    taskList.appendChild(taskElement);
  });

  // stockage des données dans le localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
