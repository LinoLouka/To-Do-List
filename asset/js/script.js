// récupération des éléments HTML
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("button[type='submit']");
const taskList = document.getElementById("taskList");
const removeCompletedButton = document.getElementById("removeBtn");

// récupération des données du localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// fonction pour afficher la liste des tâches
function renderTasks() {
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

// fonction pour ajouter une nouvelle tâche
function addTask(event) {
  event.preventDefault();

  const newTaskTitle = taskInput.value.trim();

  if (newTaskTitle === "") {
    return;
  }

  tasks.push({ title: newTaskTitle, completed: false });
  taskInput.value = "";

  renderTasks();
}

// fonction pour supprimer une tâche
function deleteTask(index) {
  tasks.splice(index, 1);

  renderTasks();
}

// fonction pour marquer ou démarquer une tâche comme terminée
function toggleTaskCompleted(index) {
  tasks[index].completed = !tasks[index].completed;

  renderTasks();
}

// fonction pour supprimer les tâches terminées
function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);

  renderTasks();
}

// ajout des écouteurs d'événement
addTaskButton.addEventListener("click", addTask);
removeCompletedButton.addEventListener("click", clearCompletedTasks);

// affichage initial de la liste des tâches
renderTasks();

//Suppression des taches completed
function removeCompletedTasks() {
  const taskList = document.getElementById("taskList");
  const completedTasks = taskList.querySelectorAll(
    'li input[type="checkbox"]:checked'
  );

  completedTasks.forEach((completedTask) => {
    const taskToRemove = completedTask.parentNode;
    taskList.removeChild(taskToRemove);
  });
}

removeCompletedButton.addEventListener("click", removeCompletedTasks);
