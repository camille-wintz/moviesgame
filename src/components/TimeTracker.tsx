import * as React from 'react';
import * as createElement from 'react-create-element';

export class TimeTracker extends React.Component<{ time: number }, undefined>{
    render(){
        return (
            <div>{ this.props.time }</div>
        )
    }
}