export const Storage = {
    // 1. Njibo ga3 l-tâches
    getTasks: () => {
        const tasks = localStorage.getItem('anti_saturator_tasks');
        return tasks ? JSON.parse(tasks) : [];
    },


    
}