import * as React from 'react';
import * as createElement from 'react-create-element';
import { Question } from '../components/Question';
import { movieCollection } from '../game/MoviesCollection';
import { Timer } from '../game/Timer';
import { TimeTracker } from '../components/TimeTracker';
import { game } from '../game/Game';

export class TimerContainer extends React.Component<undefined, undefined>{
    componentDidMount(){
        game.timer.eventer.on('tick', () => this.setState({ timer: Timer }));
    }

    render(){
        return (
            <TimeTracker time={ game.timer.time } />
        )
    }
}