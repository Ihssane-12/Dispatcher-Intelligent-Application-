// src/modules/sorter.js

export const Sorter = {

  getRankedTasks: (tasks, energy) => {

    if (!tasks || tasks.length === 0) return [];

    return tasks
      .map(task => {

        let score = task.urgency * 3 + task.importance * 2;

        if (energy <= 3) {
          score -= task.effort * 5;
        } else if (energy >= 8) {
          score -= task.effort * 2;
        } else {
          score -= task.effort * 3;
        }

        return { ...task, computedScore: score };
      })
      .sort((a, b) => b.computedScore - a.computedScore);
  }
};