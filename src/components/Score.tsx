import * as React from 'react';
import * as createElement from 'react-create-element';

export class Score extends React.Component<{score: number }, undefined>{
    render(){
        return (
            <div className={ "user-score" }>Votre score : { this.props.score }</div>
        )
    }
}