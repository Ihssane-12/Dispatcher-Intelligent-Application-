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



    }
}