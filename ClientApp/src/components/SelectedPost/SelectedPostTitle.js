import React, { Component } from 'react';

/*
 * Represents a post's title.
 *  
 * */
export class SelectedPostTitle extends Component {
    static displayName = SelectedPostTitle.name;

    render() {
        return (
            <div>
                <h4 aria-live="polite">{this.props.title}</h4>
            </div>
        );
    }
}
