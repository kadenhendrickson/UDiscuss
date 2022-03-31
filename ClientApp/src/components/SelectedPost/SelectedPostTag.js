import React, { Component } from 'react';

/*
 * Represents a post's tag. TODO
 *  
 * */
export class SelectedPostTag extends Component {
    static displayName = SelectedPostTag.name;

    render() {
        return (
            <div>
                <button>{this.props.tagTitle}</button>
            </div>
        );
    }
}
