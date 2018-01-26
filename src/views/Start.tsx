import * as React from 'react';
import * as createElement from 'react-create-element';
import { StartButton } from '../components/StartButton';
import { timer, Timer } from '../game/Timer';

export class Start extends React.Component<undefined, undefined>{
    render(){
        return <StartButton onStart={ () => timer.start() } />;
    }
}