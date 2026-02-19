
let energy=3;
let tasks=[{id:122 , titre:"Anass" , importance:3, enrgy:1  }]



export function getbesttask(tasks, enrgy) {
    if (!tasks || tasks.length === 0) return null;

    let bestTask = null;
    let highestScore = -1000;

    for(let i=0 ; i<tasks.length ; i++){
        let task = tasks[i]
        let score = (task.importance *3) + ((task.urgence * 2));

        if(enrgy<= 3){
            // Cas user fatigue
            score=score - (task.effort * 5);
        }
        else if (enrgy>= 8){
            score = score - (task.effort *2);
        }
          // 4. defeculat taches?
        if (score > highestScore) {
            highestScore = score;
            bestTask = task;
        }
    }
    return bestTask;
}

console.log(getbesttask(tasks,energy));