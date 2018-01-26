import * as React from 'react';
import * as createElement from 'react-create-element';
import { userScore, UserScore } from '../game/UserScore';
import { HighScores } from '../components/HighScores';

export class HighScoresContainer extends React.Component<undefined, UserScore>{
    constructor(props){
        super(props);
        this.state = userScore;
    }

    render(){
        return (
            <HighScores scores={ userScore.highscores } />
        )
    }
}