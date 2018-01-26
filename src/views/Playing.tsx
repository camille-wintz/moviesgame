import * as React from 'react';
import * as createElement from 'react-create-element';
import { Title } from '../components/Title';
import { Question } from '../components/Question';
import { Score } from '../components/Score';
import { QuestionContainer } from '../containers/QuestionContainer';
import { ScoreContainer } from '../containers/ScoreContainer';
import { TimerContainer } from '../containers/TimerContainer';

export class Playing extends React.Component<undefined, undefined>{
    render(){
        return (
            <div>
                <Title />
                <QuestionContainer />
                <ScoreContainer />
                <TimerContainer />
            </div>
        )
    }
}