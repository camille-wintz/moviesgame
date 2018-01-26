import { Eventer } from 'entcore-toolkit';
import http from 'axios';
import { actorsCollection, Actor } from './ActorsCollection';
import { Conf } from './Conf';

export interface Movie{
    poster_path?: string;
    title?: string;
    id: number;
}

class MovieCollection{
    page = 0;
    movies: Movie[] = [];
    loading = false;
    eventer = new Eventer();

    async sync(){
        this.loading = true;
        const response = await http.get(`${Conf.apiPath}/movie/popular?api_key=${Conf.apiKey}&language=${Conf.language}&page=${this.page}`);
        this.movies = response.data.results;
        this.loading = false;
        this.eventer.trigger('loaded');
    }

    moreMovies(){
        this.page++;
        return new Promise((resolve, reject) => {
            if(this.loading){
                this.eventer.once('loaded', () => resolve());
                return;
            }

            this.sync().then(() => resolve());
        });
    }

    async pickMovie(){
        if(this.movies.length === 0){
            await this.moreMovies();
        }
        const index = Math.floor(Math.random() * this.movies.length);
        const movie = this.movies[index];
        movie.poster_path
        this.movies.splice(index, 1);
        return movie;
    }
}

export const movieCollection = new MovieCollection();