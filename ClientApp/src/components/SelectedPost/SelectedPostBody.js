import React, { Component } from 'react';

/*
 * Represents a post's body
 *  
 * */
export class SelectedPostBody extends Component {
    static displayName = SelectedPostBody.name;

    render() {
        return (
            <div>
                <p aria-live="polite">{this.props.body}</p>
            </div>
        );
    }
}
