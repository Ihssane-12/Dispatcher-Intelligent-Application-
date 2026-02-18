
export function Header(title) {
    return `<div class="border-md">
                <h1 class="main-title main-title--center">${title}</h1>
            </div>`
}

export function TasksHeader(title) {
    return `<div class="border-md">
                <h1 class="main-title main-title--center">${title}</h1>
                <button class="btn btn--secondary btn--icon"><i class="fa-solid fa-plus"></i></button>
            </div>`
}

export function TasksContainer(tasks) {
    return `<div class="container">
                ${ListTasks(tasks)}
            </div>`
}
export function PrimaryButton(label,action){
    return `<button class="primary-btn btn--block" data-action="${action}">${label}</button>`
}

function Navbar() {
    return `<nav class="nav">
       <button id="home" class="btn"><i class="icon fa-regular fa-house"></i></button> 
        <button id="tasks" class="btn"><i class="icon fa-solid fa-clipboard-list"></i></button>
        <button id="notifications" class="btn"><i class="icon fa-solid fa-bell"></i></button>
    </nav>`
}

function ListTasks(tasks) {
    const taskslist = []
    if (tasks.length > 0) {
        for (const task of tasks) {
            const taskDiv = `<div class="task-border">
                <p>${task.title}</p>
                <div>
                   <button class="btn" data-action="edit-task" data-id="${task.id}><i class="fa-solid fa-pen-to-square"></i></button>
                   <button class="btn" data-action="delete-task" data-id="${task.id}><i class="fa-solid fa-trash"></i></button> 
                </div>
            </div>`
            taskslist.push(taskDiv)
        }
    } else {
        taskslist.push("<div>Tasks list is empty !!</div>")
    }

    return taskslist.join("")
}
function ListQuestions(questions){
        const questList = []
        if (questions.length > 0) {
        for (const question of questions) {
            const questDiv = `<div class="border-md">
            <p>${question.title}</p>
            </div>`
            questList.push(questDiv)
        }
    }
    return questList.join("")     
}
function QuestionsContainer(questions){
    return `<div class="container">
                ${ListQuestions()}
            </div>`
}


export function MainLayout(tasks) {
    return `${Header("Recently Added Tasks")}
            ${TasksContainer(tasks)}
            ${PrimaryButton("Start Quiz","start-quiz")}
            ${Navbar()}`
}
export function QuizLayout(){
    return `${Header("Quiz")}
            ${QuestionsContainer(questions)}
            ${PrimaryButton("Submit","submit")}
            `
}
