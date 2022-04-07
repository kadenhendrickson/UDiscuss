import React, { Component } from 'react';

/*
 * Represents a solution's body
 * */
export class SolutionBoxAuthor extends Component {
    static displayName = SolutionBoxAuthor.name;

    render() {
        return (
            <div>
                <p> By {this.props.author}</p>
            </div>
        );
    }
}
