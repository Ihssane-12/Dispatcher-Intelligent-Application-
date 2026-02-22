// src/app.js

import { Storage } from "./modules/storage.js";
import { TodoManager } from "./modules/todo.js";
import { Sorter } from "./modules/sorter.js";
import { Quiz } from "./modules/quiz.js";
import {
  MainLayout,
  QuizLayout,
  TasksLayout,
  CurrentTaskLayout
} from "./modules/ui.js";

const root = document.getElementById("app");

let rankedTasks = [];
let currentIndex = 0;

// ---------- RENDER ----------

function renderHome() {
  const tasks = Storage.getTasks();
  root.innerHTML = MainLayout(tasks);
}

function renderTasksPage() {
  const tasks = Storage.getTasks();
  root.innerHTML = TasksLayout(tasks);
}

function renderQuiz() {
  root.innerHTML = QuizLayout([
    { title: "How focused are you?" },
    { title: "How tired are you?" },
    { title: "How motivated are you?" }
  ]);
}

function renderSuggestion() {
  const energy = Quiz.calculateEnergy();
  const tasks = Storage.getTasks();

  rankedTasks = Sorter.getRankedTasks(tasks, energy);
  currentIndex = 0;

  if (rankedTasks.length === 0) {
    alert("No suitable task found.");
    return;
  }

  root.innerHTML = CurrentTaskLayout(rankedTasks[currentIndex]);
}

function renderNextTask() {
  currentIndex++;

  if (currentIndex >= rankedTasks.length) {
    alert("No more similar tasks available.");
    return;
  }

  root.innerHTML = CurrentTaskLayout(rankedTasks[currentIndex]);
}

// ---------- EVENTS ----------

document.addEventListener("click", (e) => {
  const action = e.target.closest("[data-action]")?.dataset.action;
  if (!action) return;

  switch (action) {

    case "go-home":
      renderHome();
      break;

    case "go-tasks":
      renderTasksPage();
      break;

    case "start-quiz":
      renderQuiz();
      break;

    case "submit-quiz":
      renderSuggestion();
      break;

    case "skip-task":
      renderNextTask();
      break;

    case "complete-task":
      renderQuiz();
      break;

    case "add-task":
      TodoManager.addTask();
      break;

    case "delete-task":
      const id = parseInt(e.target.closest("button").dataset.id);
      Storage.deleteTask(id);
      renderTasksPage();
      break;
  }
});

// ---------- INIT ----------

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
});