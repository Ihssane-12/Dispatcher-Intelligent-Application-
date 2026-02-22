export function Header(title) {
    return `<div class="border-md">
                <h1 class="main-title main-title--center">${title}</h1>
            </div>`
}

export function TasksHeader(title) {
    return `<div class="border-md">
                <h1 class="main-title main-title--center">${title}</h1>
            </div>`
}

export function TasksContainer(tasks) {
    return `<div class="container">
                ${ListTasks(tasks)}
            </div>`
}

export function PrimaryButton(label, action) {
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
                   <button class="btn" data-action="delete-task" data-id="${task.id}"><i class="fa-solid fa-trash"></i></button> 
                </div>
            </div>`
            taskslist.push(taskDiv)
        }
    } else {
        taskslist.push("<div class='empty-msg'>Tasks list is empty !!</div>")
    }
    return taskslist.join("")
}

function ListQuestions(questions) {
    const questList = []
    if (questions.length > 0) {
        for (const question of questions) {
            const questDiv = `
                <div class="quiz-card">
                    <div class="quiz-question">
                        ${question.title}
                    </div>
                    <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        value="5" 
                        class="quiz-slider"
                    />
                </div>`
            questList.push(questDiv)
        }
    }
    return questList.join("")
}

function QuestionsContainer(questions) {
    return `<div class="container grid-quiz">
                ${ListQuestions(questions)}
            </div>`
}

function CurrentTask(currentTask) {
    return `<div class="container">
                <p class="task-title">${currentTask.title}</p>
                <div class="btn-row">
                    ${PrimaryButton("Skip", "skip-task")}
                    ${PrimaryButton("Mark as complete", "complete-task")}
                </div>
            </div>`
}

export function MainLayout(tasks) {
    return `
    <div class="app-layout">
        ${Navbar()}
        <div class="content-wrapper">
            ${Header("Recently Added Tasks")}
            ${TasksContainer(tasks)}
            <div class="container-action">
                ${PrimaryButton("Start Quiz", "start-quiz")}
            </div>
        </div>
    </div>`
}

export function QuizLayout(questions) {
    return `
    <div class="app-layout">
        ${Navbar()}
        <div class="content-wrapper">
            ${Header("QUIZ")}
            ${QuestionsContainer(questions)}
            <div class="container-action">
                ${PrimaryButton("Submit", "submit-quiz")}
            </div>
        </div>
    </div>`
}

export function TasksLayout(tasks) {
    return `
    <div class="app-layout">
        ${Navbar()}
        <div class="content-wrapper">
            ${TasksHeader("Tasks")}
            <main class="grid-main">
                <section class="side-form">
                    <div class="task-form-card">
                        <input type="text" placeholder="Title" class="input" data-field="title" />
                        <select class="input" data-field="urgency">
                            <option value="">Urgency</option>
                            <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
                        </select>
                        <select class="input" data-field="importance">
                            <option value="">Importance</option>
                            <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
                        </select>
                        <select class="input" data-field="effort">
                            <option value="">Effort</option>
                            <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
                        </select>
                        ${PrimaryButton("Add task", "add-task")}
                    </div>
                </section>
                <section class="side-list">
                    <h3 class="section-title">ALL THE TASKS</h3>
                    ${ListTasks(tasks)}
                </section>
            </main>
        </div>
    </div>`
}

export function CurrentTaskLayout(currentTask) {
    return `
    <div class="app-layout">
        ${Navbar()}
        <div class="content-wrapper">
            ${Header("Current Task")}
            ${CurrentTask(currentTask)}
        </div>
    </div>`
}