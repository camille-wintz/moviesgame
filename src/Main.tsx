import * as React from 'react';
import * as createElement from 'react-create-element';
import { Start } from './views/Start';
import { Playing } from './views/Playing';
import { Result } from './views/Result';
import { game, GameState, Game } from './game/Game';

export class Main extends React.Component<undefined, Game>{
    componentDidMount(){
        game.eventer.on('updateState', () => this.setState(game));
    }
    
    render(){
        if(game.state === GameState.playing){
            return <Playing />;
        }
        if(game.state === GameState.over){
            return <Result />;
        }
        return <Start />;
    }
}