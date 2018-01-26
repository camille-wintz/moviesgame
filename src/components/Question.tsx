import * as React from 'react';
import * as createElement from 'react-create-element';
import { Movie } from '../game/MoviesCollection';
import { Actor } from '../game/ActorsCollection';

export class Question extends React.Component<{ onAnswer: () => void, actor: Actor, movie: Movie }>{
    render(){
        return (
            <div className={ "question" }>
                <div className={ "movie" }>
                    <h2></h2>
                    <img src="" />
                </div>
                <div className={ "actor "}>
                    <h2></h2>
                    <img src="" />
                </div>
            </div>
        )
    }
}