import { Eventer } from "entcore-toolkit";
import { setInterval } from "core-js/library/web/timers";

export class Timer{
    running = false;
    over = false;
    eventer = new Eventer();
    time: number;
    length = 60;
    token;

    start(){
        this.running = true;
        this.time = 0;
        this.eventer.trigger('updateState')

        this.token = setInterval(() => this.increment(), 1000);
    }

    stop(){
        clearInterval(this.token);
        this.running = false;
        this.over = true;
    }

    finish(){
        this.stop();

        this.eventer.trigger('over');
        this.eventer.trigger('updateState');
    }

    increment(){
        this.time++;
        this.eventer.trigger('tick');
        if(this.time >= this.length){
            this.finish();
        }
    }
}