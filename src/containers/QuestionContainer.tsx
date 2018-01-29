import * as React from 'react';
import * as createElement from 'react-create-element';
import { Question } from '../components/Question';
import { Matcher, Match } from '../game/Matcher';
import { game } from '../game/Game';

export class QuestionContainer extends React.Component<undefined, { match:  Match}>{
    constructor(props){
        super(props);
        this.state = { match: new Match() };
    }

    componentDidMount(){
        this.match();
    }

    async match(){
        const nextMatch = await Matcher.findMatch();
        this.setState({ match: nextMatch });
    }

    answer(answer){
        if(this.state.match.match(answer)){
            this.match();
        }
    }

    render(){
        return (
            <Question onYes={ () => this.answer(true) } onNo={ () => this.answer(false) } actor={ this.state.match.actor  } movie={ this.state.match.movie } />
        )
    }
}