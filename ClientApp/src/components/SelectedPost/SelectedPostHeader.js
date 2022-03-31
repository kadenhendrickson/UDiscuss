import React, { Component } from 'react';
import '../css/LightTheme.css';


/*
 * Creates the header banner for the selected post.
 *  
 * */
export class SelectedPostHeader extends Component {
    static displayName = SelectedPostHeader.name;

    // TODO - make time float to the right
    render() {
        return (
            <div className="secondary-color">
                <p>{this.props.postType} by {this.props.author}</p>
                <p className="pull-right">{this.props.timeSincePost}</p>
            </div>
        );
    }
}
