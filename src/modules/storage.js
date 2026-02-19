export const Storage = {
    // 1. Njibo ga3 l-tâches
    getTasks: () => {
        const tasks = localStorage.getItem('anti_saturator_tasks');
        return tasks ? JSON.parse(tasks) : [];
    },
     saveTask: (task) => {
        const tasks = Storage.getTasks();
        tasks.push(task);
        localStorage.setItem('anti_saturator_tasks', JSON.stringify(tasks));
    },
     deleteTask: (id) => {
        let tasks = Storage.getTasks();
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem('anti_saturator_tasks', JSON.stringify(tasks));
    }
};



