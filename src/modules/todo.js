import { Storage } from './storage.js';
import { Validator } from './validator.js';

export const TodoManager = {

    addTask: () => {

    const titleInput = document.querySelector('[data-field="title"]');
    const urgencyInput = document.querySelector('[data-field="urgency"]');
    const importanceInput = document.querySelector('[data-field="importance"]');
    const effortInput = document.querySelector('[data-field="effort"]');

    const titleValue = titleInput.value;

    const validation = Validator.validateTitle(titleValue);

    if (!validation.isValid) {
        alert(validation.message);
        return;
    }

    const newTask = {
        id: Date.now(),
        title: titleValue.trim(),
        urgency: parseInt(urgencyInput.value),
        importance: parseInt(importanceInput.value),
        effort: parseInt(effortInput.value),
        status: "pending",
        createdAt: new Date().toISOString()
    };

    Storage.saveTask(newTask);

    titleInput.value = "";
    urgencyInput.value = "";
    importanceInput.value = "";
    effortInput.value = "";

    alert("Task added successfully!");
},

    renderTasks: () => {
        const tasksList = document.getElementById('all-tasks-container');
        if (!tasksList) return; // Guard clause ila makanch l-element f l-page

        const tasks = Storage.getTasks();

        tasksList.innerHTML = "";

        tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task-card'; 

            taskDiv.innerHTML =`
                <div class="task-info">
                    <p class="task-tittle-text">${task.title}</p>
                </div>
                <button class="delete-btn" data-id="${task.id}" title="Supprimer">
                    🗑️
                </button>
            `;
            tasksList.appendChild(taskDiv);
        });

        TodoManager.initDeleteEvents();
    },

    initDeleteEvents: () => {
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.closest('button').dataset.id);
                Storage.deleteTask(id);
                TodoManager.renderTasks(); 
            }, { once: true });
        });
    }
};