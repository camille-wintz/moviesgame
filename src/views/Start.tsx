import * as React from 'react';
import * as createElement from 'react-create-element';
import { StartButton } from '../components/StartButton';
import { game } from '../game/Game';

export class Start extends React.Component<undefined, undefined>{
    start(){
        game.start();
    }

    render(){
        return <StartButton onStart={ () => this.start() } />;
    }
}