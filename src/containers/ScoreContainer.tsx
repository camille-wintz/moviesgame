import * as React from 'react';
import * as createElement from 'react-create-element';
import { Score } from '../components/Score';
import { userScore, UserScore } from '../game/UserScore';

export class ScoreContainer extends React.Component<undefined, UserScore>{
    constructor(props){
        super(props);
        this.state = userScore;
    }

    componentDidMount(){
        userScore.eventer.on('update', () => this.setState(userScore));
    }

    render(){
        return (
            <Score score={ userScore.currentScore } />
        )
    }
}