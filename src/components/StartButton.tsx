import * as React from 'react';
import * as createElement from 'react-create-element';

export class StartButton extends React.Component<{ onStart: () => void }, undefined>{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <button onClick={ () => this.props.onStart() }>Play</button>
        )
    }
}