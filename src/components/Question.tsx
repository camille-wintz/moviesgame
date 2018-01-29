import * as React from 'react';
import * as createElement from 'react-create-element';
import { Movie } from '../game/MoviesCollection';
import { Actor } from '../game/ActorsCollection';
import { Conf } from '../game/Conf';

export class Question extends React.Component<{ onYes: () => void, onNo: () => void, actor: Actor, movie: Movie }>{
    actorImage(){
        if(this.props.actor && this.props.actor.file_path){
            return <img src={ `${Conf.imagesPath}${this.props.actor.file_path}?api_key=${Conf.apiKey}` } />;
        }
        return <img src={ 'https://blackvelvetcoat.files.wordpress.com/2012/01/yak.jpg' } />
    }

    movieImage(){
        if(this.props.movie && this.props.movie.poster_path){
            return <img src={ `${Conf.imagesPath}${this.props.movie.poster_path}?api_key=${Conf.apiKey}` } />;
        }
        return <img src={ 'https://blackvelvetcoat.files.wordpress.com/2012/01/yak.jpg' } />
    }
    
    render(){
        return (
            <div className={ "question" }>
                <h2>Cet acteur a-t-il joué dans ce film ?</h2>
                <div className={ "movie" }>
                    <h2>{ this.props.movie.title }</h2>
                    { this.movieImage() }
                </div>
                <div className={ "actor "}>
                    <h2>{ this.props.actor.name }</h2>
                    { this.actorImage() }
                </div>
                <div className={ "options" }>
                    <button onClick={ () => this.props.onYes() }>Oui</button>
                    <button onClick={ () => this.props.onNo() }>Non</button>
                </div>
            </div>
        )
    }
}