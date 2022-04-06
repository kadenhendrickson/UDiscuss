import React, { Component } from 'react';

/*
 * Represents a solution's body
 * */
export class SolutionBoxAuthor extends Component {
    static displayName = SolutionBoxAuthor.name;

    render() {
        return (
            <div>
                <p className="mr-2">{this.props.author}</p>
            </div>
        );
    }
}
