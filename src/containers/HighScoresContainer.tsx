import * as React from 'react';
import * as createElement from 'react-create-element';
import { UserScore } from '../game/UserScore';
import { HighScores } from '../components/HighScores';
import { game } from '../game/Game';

export class HighScoresContainer extends React.Component<undefined, UserScore>{
    
    constructor(props){
        super(props);
        this.state = game.userScore;
    }

    render(){
        return (
            <HighScores scores={ game.userScore.highscores } />
        )
    }
}