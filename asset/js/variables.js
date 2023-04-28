// récupération des éléments HTML
export const taskInput = document.getElementById("taskInput");
export const addTaskButton = document.querySelector("button[type='submit']");
export const taskList = document.getElementById("taskList");
export const removeCompletedButton = document.getElementById("removeBtn");

// récupération des données du localStorage
console.log(JSON.parse(localStorage.getItem("tasks")));
export let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
