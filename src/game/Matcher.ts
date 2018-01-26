import { Actor, actorsCollection } from "./ActorsCollection";
import { Movie, movieCollection } from "./MoviesCollection";

export interface Match{
    actor: Actor;
    movie: Movie;
    isAMatch: boolean;
}

export class Matcher{
    static async findMatch(): Promise<Match>{
        const match = {} as Match;
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