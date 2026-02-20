// /src/app.js
import {
  MainLayout,
  TasksLayout,
  QuizLayout,
  CurrentTaskLayout,
} from "./modules/ui.js";

/* =========================
   Mock data (DEV)
   ========================= */
const mockTasks = [
  { id: "t1", title: "Buy groceries" },
  { id: "t2", title: "Finish UI components" },
  { id: "t3", title: "Push to GitHub" },
];

const mockQuestions = [
  { id: "q1", title: "How motivated are you?" },
  { id: "q2", title: "How clear is your mind?" },
  { id: "q3", title: "How physically energized are you?" },
];

const mockCurrentTask = { id: "t2", title: "Finish UI components" };

/* =========================
   State (DEV)
   ========================= */
let state = {
  view: "home",
  tasks: [...mockTasks],
  questions: [...mockQuestions],
  currentTask: { ...mockCurrentTask },
};

const appRoot = document.querySelector(".app");

/* =========================
   Render helpers
   ========================= */
function render(view = state.view) {
  state.view = view;

  switch (view) {
    case "home":
      appRoot.innerHTML = MainLayout(state.tasks);
      break;

    case "tasks":
      appRoot.innerHTML = TasksLayout(state.tasks);
      break;

    case "quiz":
      appRoot.innerHTML = QuizLayout(state.questions);
      break;

    case "current":
      appRoot.innerHTML = CurrentTaskLayout(state.currentTask);
      break;

    default:
      appRoot.innerHTML = MainLayout(state.tasks);
  }
}

function showHome() {
  render("home");
}
function showTasks() {
  render("tasks");
}
function showQuiz() {
  render("quiz");
}
function showCurrent() {
  render("current");
}

/* =========================
   Modal helpers (uses id)
   ========================= */
function openTaskModal() {
  const modal = document.getElementById("taskModal");
  if (!modal) return console.warn("taskModal not found: render Tasks view first");
  modal.classList.remove("is-hidden");
}

function closeTaskModal() {
  document.getElementById("taskModal")?.classList.add("is-hidden");
}

/* =========================
   Quiz slider live value (optional)
   ========================= */
document.addEventListener("input", (e) => {
  if (!e.target.classList.contains("slider")) return;

  const qId = e.target.dataset.questionId;
  const out = document.getElementById(`value-${qId}`);
  if (out) out.textContent = e.target.value;
});

/* =========================
   Global click handler
   ========================= */
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) return;

  const action = el.dataset.action;
  const id = el.dataset.id;

  console.log("ACTION:", action, "ID:", id);

  switch (action) {
    /* -------- Nav -------- */
    case "go-home":
      showHome();
      break;

    case "go-tasks":
      showTasks();
      break;

    case "go-notifications":
      // use quiz as "notifications" for now (or create a new layout later)
      showQuiz();
      break;

    /* -------- Home -------- */
    case "start-quiz":
      showQuiz();
      break;

    /* -------- Quiz -------- */
    case "submit-quiz": {
      // Collect answers from sliders (if you added them in UI)
      const answers = [...document.querySelectorAll(".slider")].map((s) => ({
        id: s.dataset.questionId,
        value: Number(s.value),
      }));

      console.log("Quiz answers:", answers);

      // DEV: move to current task screen
      showCurrent();
      break;
    }

    /* -------- Tasks CRUD -------- */
    case "edit-task":
      console.log("Edit task:", id);
      break;

    case "delete-task":
      console.log("Delete task:", id);
      // DEV remove from state and re-render
      state.tasks = state.tasks.filter((t) => t.id !== id);
      render("tasks");
      break;

    /* -------- Modal open/close -------- */
    case "open-add-task":
      // ensure tasks view is rendered; then open modal
      if (state.view !== "tasks") showTasks();
      openTaskModal();
      break;

    case "close-modal":
      closeTaskModal();
      break;

    case "add-task": {
      const title = document.querySelector('[data-field="title"]')?.value?.trim();
      const urgency = document.querySelector('[data-field="urgency"]')?.value;
      const importance = document.querySelector('[data-field="importance"]')?.value;
      const effort = document.querySelector('[data-field="effort"]')?.value;

      const payload = { title, urgency, importance, effort };
      console.log("Add task payload:", payload);

      // DEV: basic guard
      if (!title || !urgency || !importance || !effort) {
        alert("Please fill all fields.");
        return;
      }

      // DEV: push task and rerender
      state.tasks.unshift({
        id: crypto.randomUUID?.() ?? `t-${Date.now()}`,
        title,
      });

      closeTaskModal();
      render("tasks");
      break;
    }

    /* -------- Current task -------- */
    case "skip-task":
      console.log("Skip current task");
      showTasks();
      break;

    case "complete-task":
      console.log("Complete current task");
      showHome();
      break;

    default:
      console.warn("Unhandled action:", action);
  }
});

/* =========================
   Keyboard shortcuts (DEV)
   ========================= */
document.addEventListener("keydown", (e) => {
  if (e.key === "1") showHome();
  if (e.key === "2") showTasks();
  if (e.key === "3") showQuiz();
  if (e.key === "4") showCurrent();
  if (e.key === "Escape") closeTaskModal();
});

/* =========================
   Boot
   ========================= */
render("home");