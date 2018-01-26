import * as React from 'react';
import * as createElement from 'react-create-element';
import { Start } from './Start';
import { HighScoresContainer } from '../containers/HighScoresContainer';
import { userScore } from '../game/UserScore';
import { CurrentScore } from '../components/CurrentScore';

export class Result extends React.Component<undefined, undefined>{
    render(){
        return (
            <div>
                <CurrentScore score={ userScore.currentScore } />
                <HighScoresContainer />
                <Start />
            </div>
        );
    }
}