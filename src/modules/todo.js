import { Storage } from './storage.js';
import { Validator } from './validator.js';

export const TodoManager = {
    addTask: () => {
        const titleInput = document.getElementById('task-title');
        const urgencyInput = document.getElementById('urgency-select');
        const importanceInput = document.getElementById('importance-select');
        const effortInput = document.getElementById('effort-select');

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
            status: 'pending',
            createdAt: new Date().toISOString()
        };
        Storage.saveTask(newTask);
        titleInput.value = "";
        TodoManager.renderTasks();
        console.log("Task added successfully:", newTask);
    },
    renderTasks: () => {
    const tasksList = document.getElementById('all-tasks-container');
    if (!tasksList) return;

    const tasks = Storage.getTasks();
    tasksList.innerHTML = "";
        tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-card';
        
        taskDiv.innerHTML = `
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
        
    })}
}