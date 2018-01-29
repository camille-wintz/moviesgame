import * as React from 'react';
import * as createElement from 'react-create-element';
import { Score } from '../components/Score';
import { UserScore } from '../game/UserScore';
import { game } from '../game/Game';

export class ScoreContainer extends React.Component<undefined, UserScore>{
    constructor(props){
        super(props);
        this.state = game.userScore;
    }

    componentDidMount(){
        game.userScore.eventer.on('update', () => this.setState(game.userScore));
    }

    componentWillUnmount(){
        game.userScore.eventer.off('update');
    }

    render(){
        return (
            <Score score={ game.userScore.currentScore } />
        )
    }
}