import * as React from 'react';
import * as createElement from 'react-create-element';
import { Question } from '../components/Question';
import { movieCollection } from '../game/MoviesCollection';
import { timer, Timer } from '../game/Timer';
import { TimeTracker } from '../components/TimeTracker';

export class TimerContainer extends React.Component<undefined, undefined>{
    componentDidMount(){
        timer.eventer.on('tick', () => this.setState({ timer: Timer }));
    }

    render(){
        return (
            <TimeTracker time={ timer.time } />
        )
    }
}