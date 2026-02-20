export function Header(title) {
    return `<div class="border-md">
                <h1 class="main-title main-title--center">${title}</h1>
            </div>`
}

export function TasksHeader(title) {
    return `<div class="border-md">
                <h1 class="main-title main-title--center">${title}</h1>
                <button class="btn btn--secondary btn--icon" data-action="open-task-modal"><i class="fa-solid fa-plus"></i></button>
            </div>`
}

export function TasksContainer(tasks) {
    return `<div class="container">
                ${ListTasks(tasks)}
            </div>`
}
export function PrimaryButton(label,action){
    return `<button type="button" class="primary-btn btn--block" data-action="${action}">${label}</button>`
}

function Navbar() {
    return `<nav class="nav">
       <button class="btn" data-action="go-home"><i class="icon fa-regular fa-house"></i></button> 
        <button class="btn" data-action="go-tasks"><i class="icon fa-solid fa-clipboard-list"></i></button>
        <button class="btn" data-action="go-notifications"><i class="icon fa-solid fa-bell"></i></button>
    </nav>`
}

function ListTasks(tasks) {
    const taskslist = []
    if (tasks.length > 0) {
        for (const task of tasks) {
            const taskDiv = `<div class="task-border">
                <p>${task.title}</p>
                <div class="task-actions">
                   <button class="btn" data-action="edit-task" data-id="${task.id}"><i class="fa-solid fa-pen-to-square"></i></button>
                   <button class="btn" data-action="delete-task" data-id="${task.id}"><i class="fa-solid fa-trash"></i></button> 
                </div>
            </div>`
            taskslist.push(taskDiv)
        }
    } else {
        taskslist.push("<div>Tasks list is empty !!</div>")
    }

    return taskslist.join("")
    //gdsyagxjxkjkisajnxkjoissklmnkkms
}
function ListQuestions(questions){
    const questList = []

    if (questions.length > 0) {
        for (const question of questions) {

            const questDiv = `
                <div class="border-md">
                    <p>${question.title}</p>
                    <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        value="5"
                        class="quiz-slider"
                    />
                </div>
            `
            questList.push(questDiv)
        }
    }

    return questList.join("")     
}
function QuestionsContainer(questions){
    return `<div class="container">
                ${ListQuestions(questions)}
            </div>`
}
function CurrentTask(currentTask){
    return `<div class="container">
                <p class="task-title">${currentTask.title}</p>
                <div class="btn-row">
                ${PrimaryButton("Skip","skip-task")}
                ${PrimaryButton("Mark as complete","complete-task")}
                </div>
            </div>`
}
function TaskModal() {
  return `
    <div id="taskModal" class="modal is-hidden">

      <div class="modal__backdrop"></div>

      <div class="modal__content">

        <div class="task-form-card">

          <input name="title"
            type="text"
            placeholder="Title"
            class="input"
            data-field="title"
            required
          />

          <select name="urgency" class="input" data-field="urgency" required>
            <option value="">Urgency</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <select name="importance" class="input" data-field="importance" required>
            <option value="">Importance</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <select name="effort" class="input" data-field="effort" required>
            <option value="">Effort</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          ${PrimaryButton("Add task", "add-task")}

        </div>

      </div>

    </div>
  `;
}


export function MainLayout(tasks) {
    return `${Header("Recently Added Tasks")}
            ${TasksContainer(tasks)}
            ${PrimaryButton("Start Quiz","start-quiz")}
            ${Navbar()}`
}
export function QuizLayout(questions){
    return `${Header("Quiz")}
            ${QuestionsContainer(questions)}
            ${PrimaryButton("Submit","submit-quiz")}
            ${Navbar()}`
}
export function TasksLayout(tasks){
    return `${TasksHeader("Tasks Management")}
            ${TaskModal()}
            ${TasksContainer(tasks)}
            ${Navbar()}
            `
}
export function CurrentTaskLayout(currentTask){
    return `${Header("Current Task")}
            ${CurrentTask(currentTask)}
            ${Navbar()}`
}