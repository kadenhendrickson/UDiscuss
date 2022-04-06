import React, { Component } from 'react';

/*
 * Represents a post's tag.
 *  
 * */
export class SelectedPostTag extends Component {
    static displayName = SelectedPostTag.name;

    render() {
        return (
            <div>
                <button className="btn btn-outline-danger post-tag" style={{ cursor: 'default'}}>{this.props.tagTitle}</button>
            </div>
        );
    }
}
