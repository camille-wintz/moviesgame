import * as React from 'react';
import * as createElement from 'react-create-element';
import { StartButton } from '../components/StartButton';
import { timer, Timer } from '../game/Timer';
import { userScore } from '../game/UserScore';

export class Start extends React.Component<undefined, undefined>{
    start(){
        timer.start();
        userScore.start();
    }

    render(){
        return <StartButton onStart={ () => this.start() } />;
    }
}