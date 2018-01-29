import * as React from 'react';
import * as createElement from 'react-create-element';
import { Start } from './Start';
import { HighScoresContainer } from '../containers/HighScoresContainer';
import { CurrentScore } from '../components/CurrentScore';
import { game } from '../game/Game';

export class Result extends React.Component<undefined, undefined>{
    render(){
        return (
            <div>
                <CurrentScore score={ game.userScore.currentScore } />
                <HighScoresContainer />
                <Start />
            </div>
        );
    }
}