
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

function TasksContainer(tasks) {
    return `<div class="task-list">
                ${ListTasks(tasks)}
            </div>`
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
                   <button class="btn"><i class="fa-solid fa-pen-to-square"></i></button>
                   <button class="btn"><i class="fa-solid fa-trash"></i></button> 
                </div>
            </div>`
            taskslist.push(taskDiv)
        }
    } else {
        taskslist.push("<div>Tasks list is empty !!</div>")
    }

    return taskslist.join("")
}

export function MainLayout(tasks) {
    return `${Header("Recently Added Tasks")}
            ${TasksContainer(tasks)}
            ${Navbar()}`
}
