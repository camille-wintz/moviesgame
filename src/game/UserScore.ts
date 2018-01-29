import { Eventer } from "entcore-toolkit";

export interface Score{
    score: number;
    username: string;
}

export class UserScore{
    highscores: Score[] = [];
    eventer = new Eventer();
    currentScore = 0;

    constructor(){
        if(localStorage){
            const highscores = JSON.parse(localStorage.getItem('highscores'));
            if(highscores){
                this.highscores = highscores;
            }
        }
    }

    start(){
        this.currentScore = 0;
    }

    updateScores(){
        this.highscores.push({ username: "Player", score: this.currentScore });
        if(localStorage){
            localStorage.setItem('highscores', JSON.stringify(this.highscores));
        }
    }

    logSuccess(){
        this.currentScore ++;
        this.eventer.trigger('update');
    }
}