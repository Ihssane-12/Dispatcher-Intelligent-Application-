// src/modules/storage.js

export const Storage = {

    getTasks: () => {
        const tasks = localStorage.getItem("dispatcher_tasks");
        return tasks ? JSON.parse(tasks) : [];
    },

    saveTask: (task) => {
        const tasks = Storage.getTasks();
        tasks.push(task);
        localStorage.setItem("dispatcher_tasks", JSON.stringify(tasks));
    },

    deleteTask: (id) => {
        const tasks = Storage.getTasks().filter(task => task.id !== id);
        localStorage.setItem("dispatcher_tasks", JSON.stringify(tasks));
    }
};