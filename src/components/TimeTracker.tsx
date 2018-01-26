import * as React from 'react';
import * as createElement from 'react-create-element';

export class TimeTracker extends React.Component<{ time: number }, undefined>{
    render(){
        return (
            <div className={ "time-tracker" }>{ this.props.time }</div>
        )
    }
}