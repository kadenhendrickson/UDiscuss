import React, { Component } from 'react';

/*
 * Represents a solution's body
 * */
export class SolutionBoxText extends Component {
    static displayName = SolutionBoxText.name;

    render() {
        return (
            <div>
                <p>{this.props.contents}</p>
            </div>
        );
    }
}
