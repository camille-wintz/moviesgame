import * as React from 'react';
import * as createElement from 'react-create-element';
import { Movie } from '../game/MoviesCollection';
import { Actor } from '../game/ActorsCollection';
import { Conf } from '../game/Conf';
import { Score } from '../game/UserScore';

export class CurrentScore extends React.Component<{score: number}>{
    render(){
        return (
            <div className={ "result" }>
                Votre score pour cette session est { this.props.score }
            </div>
        )
    }
}