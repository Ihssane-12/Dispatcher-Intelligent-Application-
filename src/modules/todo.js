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

}
}