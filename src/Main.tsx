import * as React from 'react';
import * as createElement from 'react-create-element';
import { Start } from './views/Start';
import { Playing } from './views/Playing';
import { timer, Timer } from './game/Timer';
import { Result } from './views/Result';

export class Main extends React.Component<undefined, { timer: Timer }>{
    componentDidMount(){
        timer.eventer.on('updateState', () => this.setState({ timer: timer }));
    }
    
    render(){
        if(timer.running){
            return <Playing />;
        }
        if(timer.over){
            return <Result />;
        }
        return <Start />;
    }
}