import { Timer } from "./Timer";
import { UserScore } from './UserScore';
import { Eventer } from 'entcore-toolkit';
import { Match } from "./Matcher";

export enum GameState{
    pending, playing, over
}

export class Game{
    timer = new Timer();
    userScore = new UserScore();
    eventer = new Eventer();

    state:GameState = GameState.pending;

    over(){
        this.userScore.updateScores();
        this.timer.stop();
        this.state = GameState.over;
        this.eventer.trigger('updateState');
    }

    start(){
        this.timer.start();
        this.userScore.start();
        this.state = GameState.playing;
        this.eventer.trigger('updateState');
    }

    constructor(){
        this.timer.eventer.on('over', () => this.over());
        Match.eventer.on('success',() => game.userScore.logSuccess());
        Match.eventer.on('failure',() => this.over());
    }
}

export const game = new Game();