import { Movie } from "./MoviesCollection";
import http from 'axios';
import { Eventer } from "entcore-toolkit";
import { Conf } from "./Conf";

export interface Actor{
    file_path?: string;
    id?: number;
    name?: string;
}

export class ActorsCollection{
    loading = false;
    eventer = new Eventer();
    page = 0;
    actors: Actor[] = [];
    mainCast = 6;

    async addImage(actor: Actor){
        const response = await http.get(`${Conf.apiPath}/person/${actor.id}/images?api_key=${Conf.apiKey}&language=${Conf.language}`);
        if(!response.data.profiles.length){
            return;
        }
        actor.file_path = response.data.profiles[0].file_path;
    }

    async sync(){
        this.loading = true;
        const response = await http.get(`${Conf.apiPath}/person/popular?api_key=${Conf.apiKey}&language=${Conf.language}&page=${this.page}`);
        this.actors = response.data.results;
        this.loading = false;
        this.eventer.trigger('loaded');
    }

    moreActors(){
        this.page++;
        return new Promise((resolve, reject) => {
            if(this.loading){
                this.eventer.once('loaded', () => resolve());
                return;
            }

            this.sync().then(() => resolve());
        });
    }

    async anyActor(): Promise<Actor>{
        if(this.actors.length === 0){
            await this.moreActors();
        }
        const index = Math.floor(Math.random() * this.actors.length);
        const actor = this.actors[index];
        this.actors.splice(index, 1);
        await this.addImage(actor);
        return actor;
    }

    async forMovie(movie: Movie): Promise<Actor>{
        const response = await http.get(`${Conf.apiPath}/movie/${movie.id}/credits?api_key=${Conf.apiKey}&language=${Conf.language}`);
        // Only keep main cast
        const actors = response.data.cast.splice(this.mainCast, response.data.cast.length);
        const index = Math.floor(Math.random() * actors.length);
        const actor = actors[index];
        await this.addImage(actor);
        return actor;
    }
}

export const actorsCollection = new ActorsCollection();