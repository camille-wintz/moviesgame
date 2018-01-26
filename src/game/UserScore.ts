import { Eventer } from "entcore-toolkit";
import { timer } from "./Timer";

export interface Score{
    score: number;
    username: string;
}

export class UserScore{
    highscores: Score[] = [];
    eventer = new Eventer();
    currentScore = 0;

    constructor(){
        timer.eventer.on('over', () => this.updateScores());
        if(localStorage){
            const highscores = JSON.parse(localStorage.getItem('highscores'));
            if(highscores){
                this.highscores = highscores;
            }
        }
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

export const userScore = new UserScore();