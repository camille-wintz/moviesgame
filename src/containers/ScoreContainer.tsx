import * as React from 'react';
import * as createElement from 'react-create-element';
import { Score } from '../components/Score';

export class ScoreContainer extends React.Component<undefined, undefined>{
    render(){
        return (
            <Score />
        )
    }
}