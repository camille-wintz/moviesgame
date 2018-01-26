import { Eventer } from "entcore-toolkit";

export interface Score{
    score: number;
    username: string;
}

export class UserScore{
    highscores: Score[];
    eventer = new Eventer();
    currentScore = 0;

    logSuccess(){
        this.currentScore ++;
        this.eventer.trigger('update');
    }
}

export const userScore = new UserScore();