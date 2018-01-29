import * as React from 'react';
import * as createElement from 'react-create-element';
import { Movie } from '../game/MoviesCollection';
import { Actor } from '../game/ActorsCollection';
import { Conf } from '../game/Conf';
import { Score } from '../game/UserScore';

export class HighScores extends React.Component<{scores: Score[]}>{
    render(){
        return (
            <div className={ "highscores" }>
                <ul>
                    { this.props.scores.map((score, index) => (
                        <li key={index}>{ score.username } { score.score }</li>
                    ))}
                </ul>
            </div>
        )
    }
}