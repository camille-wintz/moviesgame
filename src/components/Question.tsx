import * as React from 'react';
import * as createElement from 'react-create-element';
import { Movie } from '../game/MoviesCollection';
import { Actor } from '../game/ActorsCollection';
import { Conf } from '../game/Conf';

export class Question extends React.Component<{ onYes: () => void, onNo: () => void, actor: Actor, movie: Movie }>{
    render(){
        return (
            <div className={ "question" }>
                <div className={ "movie" }>
                    <h2>{ this.props.movie.title }</h2>
                    <img src={ `${Conf.imagesPath}${this.props.movie.poster_path}?api_key=${Conf.apiKey}` } />
                </div>
                <div className={ "actor "}>
                    <h2>{ this.props.actor.name }</h2>
                    <img src={ `${Conf.imagesPath}${this.props.actor.file_path}?api_key=${Conf.apiKey}` } />
                </div>
                <div className={ "options" }>
                    <button>Oui</button><button>Non</button>
                </div>
            </div>
        )
    }
}