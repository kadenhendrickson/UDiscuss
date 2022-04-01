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
                <p style={{ margin: '10px' }}>{this.props.body}</p>
            </div>
        );
    }
}
