import * as React from 'react';
import * as createElement from 'react-create-element';
import { Start } from './Start';

export class Result extends React.Component<undefined, undefined>{
    render(){
        return (
            <div>
                <Start />
            </div>
        );
    }
}