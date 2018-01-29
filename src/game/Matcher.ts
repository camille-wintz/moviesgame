import { Actor, actorsCollection } from "./ActorsCollection";
import { Movie, movieCollection } from "./MoviesCollection";
import { Eventer } from "entcore-toolkit";

export class Match{
    static eventer = new Eventer();

    actor: Actor;
    movie: Movie;
    isAMatch: boolean;

    constructor(){
        this.actor = {};
        this.movie = {};
    }

    match(answer){
        if(answer === this.isAMatch){
            Match.eventer.trigger('success');
            return true;
        }
        else{
            Match.eventer.trigger('failure');
            return false;
        }
    }
}

export class Matcher{
    static async findMatch(): Promise<Match>{
        const match = new Match();
        match.movie = await movieCollection.pickMovie();
        match.isAMatch = Math.random() >= 0.5;
        if(match.isAMatch){
            match.actor = await actorsCollection.forMovie(match.movie);
        }
        else{
            match.actor = await actorsCollection.anyActor();
        }
        return match;
    }
}