import { Actor } from "./ActorsCollection";
import { Movie, movieCollection } from "./MoviesCollection";

export interface Match{
    actor: Actor;
    movie: Movie;
}

export class Matcher{
    static async findMatch(): Promise<Match>{
        const movie = await movieCollection.pickMovie();
        console.log(movieCollection.movies);
        return { actor: {}, movie: movie }
    }
}