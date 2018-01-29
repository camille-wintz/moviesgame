import * as React from 'react';
import * as createElement from 'react-create-element';

export class StartButton extends React.Component<{ onStart: () => void }, undefined>{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={ "start" }>
                <button onClick={ () => this.props.onStart() }>Play</button>
            </div>
        )
    }
}