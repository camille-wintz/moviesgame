import * as React from 'react';
import * as createElement from 'react-create-element';
import { Question } from '../components/Question';
import { userScore } from '../game/UserScore';
import { Matcher, Match } from '../game/Matcher';

export class QuestionContainer extends React.Component<undefined, Match>{
    constructor(props){
        super(props);
        this.state = { actor: {}, movie: { id: 0 }, isAMatch: false };
        this.match();
    }

    async match(){
        const nextMatch = await Matcher.findMatch();
        this.setState(nextMatch);
    }

    answer(answer){
        if(answer === this.state.isAMatch){
            userScore.logSuccess();
        }
        this.match();
    }

    render(){
        return (
            <Question onYes={ () => this.answer(true) } onNo={ () => this.answer(false) } actor={ this.state.actor  } movie={ this.state.movie } />
        )
    }
}