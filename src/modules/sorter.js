function getbesttask(tasks,enrgy){
    let besttask=null;
    let hightscore = -1000;

    for(let i=0 ; i<length.tasks ; i++){
        let task = tasks[i]
        let score = (task.importance *3) + (task.enrgy *2);

        if(enrgy<= 3){
            // Cas user 3yan 
            score=score - (task.effort * 5);
        }
        else if (enrgy>= 8){
            score = score - (task.effort *2);
        }
    }
}